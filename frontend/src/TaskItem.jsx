import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newCompleted, setNewCompleted] = useState(task.completed);

  const handleEdit = () => {
    if (editing) {
      updateTask(task.id, { description: newDescription, completed: newCompleted });
    }
    setEditing(!editing);
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="checkbox"
            checked={newCompleted}
            onChange={(e) => setNewCompleted(e.target.checked)}
          />
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <span>{task.completed ? '✓' : '✗'}</span>
        </>
      )}
      <button onClick={handleEdit}>
        {editing ? 'Guardar' : 'Editar'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
