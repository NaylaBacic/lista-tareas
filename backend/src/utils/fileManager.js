import fs from 'fs';
import path from 'path';

// Función para leer el archivo de tareas
export const readTasksFromFile = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, '../../tasks.json'), 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return []; // Si no existe el archivo, devolvemos un array vacío
  }
};

// Función para guardar las tareas en un archivo
export const saveTasksToFile = (tasks) => {
  fs.writeFileSync(path.join(__dirname, '../../tasks.json'), JSON.stringify(tasks, null, 2), 'utf8');
};
