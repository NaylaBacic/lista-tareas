import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");  // Estado para la nueva tarea

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    if (!taskName) return;  // Evitar agregar tareas vacías

    const newTask = {
      description: taskName,  // Aquí se pasa la descripción de la tarea
    };

    addTask(newTask);  // Llamar la función addTask para agregar la tarea

    setTaskName("");  // Limpiar el campo de entrada después de agregar la tarea
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}  // Actualizar el estado con lo que el usuario escribe
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;
