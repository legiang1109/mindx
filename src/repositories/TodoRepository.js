const Key = "Todos";

const save = (data) => {
  console.log(data);
  localStorage.setItem(Key, JSON.stringify(data));
};

const get = () => {
  const jsonString = localStorage.getItem(Key);
  return JSON.parse(jsonString);
};

export { save, get };
