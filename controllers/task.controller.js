const taskModel = require('../models/task.model.js');

// Lógica para obtener todas las tareas
const getAllTasks = (req, res) => {
  const tasks = taskModel.findAll();
  res.status(200).json(tasks);
};

// Lógica para crear una nueva tarea
const createTask = (req, res) => {
  const { title, description } = req.body;

  // Validación
  if (!title) {
    return res.status(400).json({ error: 'El campo "title" es obligatorio.' });
  }

  const newTask = taskModel.create({ title, description });
  res.status(201).json(newTask);
};

module.exports = {
  getAllTasks,
  createTask,
};