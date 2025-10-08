const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller.js');

// Ruta para obtener todas las tareas: GET /tasks
router.get('/', taskController.getAllTasks);

// Ruta para crear una nueva tarea: POST /tasks
router.post('/', taskController.createTask);

module.exports = router;