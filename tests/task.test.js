const request = require('supertest');
const app = require('../app.js');

describe('API de Tareas', () => {

  test('GET /tasks -> debería devolver un array de tareas', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test('POST /tasks -> debería crear una nueva tarea exitosamente', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ title: 'Tarea desde la prueba', description: 'Descripción de prueba' });
    
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Tarea desde la prueba');
  });

  test('POST /tasks -> debería devolver error 400 si falta el título', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({ description: 'Esta tarea no tiene título' });
      
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('El campo "title" es obligatorio.');
  });

});