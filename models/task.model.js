// Simulación de una base de datos en memoria
let tasks = [
  { id: 1, title: 'Tarea de ejemplo', description: 'Esta es una tarea inicial' }
];
let lastId = 1;

// Función para obtener todas las tareas
const findAll = () => {
  return tasks;
};

// Función para crear una nueva tarea
const create = (taskData) => {
  lastId++;
  const newTask = {
    id: lastId,
    title: taskData.title,
    description: taskData.description || ''
  };
  tasks.push(newTask);
  return newTask;
};

module.exports = {
  findAll,
  create,
};