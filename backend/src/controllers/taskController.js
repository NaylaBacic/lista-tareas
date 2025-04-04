import { readTasksFromFile, saveTasksToFile } from '../utils/fileManager.js';

// Obtener todas las tareas
export const getTasks = (req, res) => {
  const tasks = readTasksFromFile();
  res.json(tasks);
};

// Crear una nueva tarea
export const createTask = (req, res) => {
  const { description } = req.body;
  const tasks = readTasksFromFile();
  const newTask = { id: tasks.length + 1, description, completed: false };
  tasks.push(newTask);
  saveTasksToFile(tasks);
  res.status(201).json(newTask);
};

// Actualizar una tarea
export const updateTask = (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;
  const tasks = readTasksFromFile();
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.description = description || task.description;
  task.completed = completed !== undefined ? completed : task.completed;

  saveTasksToFile(tasks);
  res.json(task);
};

// Eliminar una tarea
export const deleteTask = (req, res) => {
  const { id } = req.params;
  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  saveTasksToFile(tasks);
  res.status(204).send();
};
