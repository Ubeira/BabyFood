const localStorageTodos = localStorage.getItem('todos');

const state = {
  todos: localStorageTodos ? JSON.parse(localStorageTodos) : [],
};

const save = () => {
  const todosAsString = JSON.stringify(state.todos);
  localStorage.setItem('todos', todosAsString);
};

export const addTodo = (text) => {
  const newTodo = {
    text: text,
    done: false,
    date: new Date().toISOString(),
  };

  state.todos.unshift(newTodo);
  save();
};

export const deleteAllTodos = () => {
  state.todos = [];
  save();
};

export const toggleTodo = (index) => {
  const todo = state.todos[index];
  if (!todo) throw new Error('El todo no existe');

  todo.done = !todo.done;
  save();
};

export const cleanTodos = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  save();
};

export default state;
