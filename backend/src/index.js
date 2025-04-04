import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

// Cargar las variables de entorno desde .env
dotenv.config();

// Crear una instancia de express
const app = express();

// Middleware para parsear JSON
app.use(express.json());
// Middleware para permitir peticiones de otros orígenes (CORS)
app.use(cors('*'));

// Usar las rutas de tareas
app.use('/api/tasks', taskRoutes);

// Iniciar servidor en el puerto especificado en el .env
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.clear();
  console.log(`API corriendo en http://localhost:${port}`);
});

// Manejo de errores global (para rutas no encontradas o errores generales)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de tareas!');
  });
  