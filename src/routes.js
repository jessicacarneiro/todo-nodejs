const express = require('express');
const routes = express.Router();

const TaskController = require('./controllers/TaskController');

routes.get('/tasks', TaskController.index);
routes.get('/tasks/:id', TaskController.show);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.destroy);

module.exports = routes;