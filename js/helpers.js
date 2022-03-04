const padNumber = (n) => {
  if (n < 10) return `0${n}`;
  return n;
};

export const formatDate = (d) => {
  const date = new Date(d);

  const day = padNumber(date.getDate());
  const month = padNumber(date.getMonth() + 1);
  const year = date.getFullYear();
  const hour = padNumber(date.getHours());
  const minute = padNumber(date.getMinutes());

  return `${day}/${month}/${year} - ${hour}:${minute}`;
};
