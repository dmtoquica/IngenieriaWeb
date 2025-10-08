const express = require('express');
const taskRoutes = require('./routes/task.routes.js');

const app = express();
const PORT = 3000;

// Middleware para que el servidor entienda el formato JSON
app.use(express.json());

// Usa las rutas definidas para el endpoint /tasks
app.use('/tasks', taskRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Exporta la app para que las pruebas puedan utilizarla
module.exports = app;