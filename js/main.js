import state, {
  addTodo,
  deleteAllTodos,
  cleanTodos,
  toggleTodo,
} from './data.js';

import { formatDate } from './helpers.js';

const todoForm = document.querySelector('form.baby-form');
const todoList = document.querySelector('ul.baby-list');
const todoClean = document.querySelector('button.baby-clean');
const todoEmpty = document.querySelector('button.baby-empty');
const rightBoob = document.querySelector('button.right');
const leftBoob = document.querySelector('button.left');

// Input izquierda
rightBoob.addEventListener('click', (e) => {
  e.preventDefault();
  addTodo('Derecha');

  document.body.scrollIntoView({ behavior: 'smooth' });

  render();
});
// input derecha
leftBoob.addEventListener('click', (e) => {
  e.preventDefault();

  addTodo('Izquierda');

  document.body.scrollIntoView({ behavior: 'smooth' });

  render();
});
// Limpieza de todos ya hechos
todoClean.addEventListener('click', () => {
  cleanTodos();
  render();
});

// Borrado de todos los todos
todoEmpty.addEventListener('click', () => {
  if (confirm('Estás seguro?')) {
    deleteAllTodos();
    render();
  }
});

// Marcado de un todo como hecho / no hecho
todoList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('input, p, time, li')) {
    const index = target.closest('li').getAttribute('data-index');
    toggleTodo(index);
    render();
  }
});

// Escribe la lista de todos en el DOM
const render = () => {
  todoList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (const [index, todo] of state.todos.entries()) {
    // Creamos el li
    const li = document.createElement('li');
    li.setAttribute('data-index', index);

    // Creamos el checkbox
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');

    // Si el todo está hecho
    if (todo.done) {
      li.classList.add('done');
      check.setAttribute('checked', 'yes');
    }

    // Creamos el texto del todo
    const p = document.createElement('p');
    p.innerText = todo.text;

    // Creamos el time
    const time = document.createElement('time');
    time.setAttribute('datetime', todo.date);
    time.innerText = formatDate(todo.date);

    // Metemos los elementos en el li
    li.append(check);
    li.append(p);
    li.append(time);

    fragment.append(li);
  }

  todoList.append(fragment);
};

render();
