import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

// Ruta para obtener todas las tareas
router.get('/', getTasks);

// Ruta para crear una nueva tarea
router.post('/', createTask);

// Ruta para actualizar una tarea
router.put('/:id', updateTask);

// Ruta para eliminar una tarea
router.delete('/:id', deleteTask);

export default router;
