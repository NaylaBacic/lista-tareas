import React, { useState } from "react";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleEdit = (task) => {
    setIsEditing(task.id);
    setEditedTask(task.description);
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditedTask("");
  };

  const handleSave = (id) => {
    updateTask(id, { description: editedTask });
    setIsEditing(null);
    setEditedTask("");
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {isEditing === task.id ? (
                <div>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button onClick={() => handleSave(task.id)}>Guardar</button>
                  <button onClick={handleCancel}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <span>{task.description}</span>
                  <button onClick={() => handleEdit(task)}>Editar</button>
                  <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
