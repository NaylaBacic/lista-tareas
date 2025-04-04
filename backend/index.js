import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env
dotenv.config();

// Crear una instancia de express
const app = express();

// Middleware para parsear JSON
app.use(express.json());
// Middleware para permitir peticiones de otros orígenes (CORS)
app.use(cors('*'));

// In-memory storage para las tareas (array)
let tasks = [];

// Rutas de la API
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { description } = req.body;
  const newTask = { id: tasks.length + 1, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;

  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.description = description || task.description;
  task.completed = completed !== undefined ? completed : task.completed;

  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// Iniciar servidor en el puerto especificado en el .env
app.listen(process.env.PORT, () => {
  console.clear();
  console.log(`API corriendo en http://localhost:${process.env.PORT}`);
});

// Manejo de errores global (para rutas no encontradas o
