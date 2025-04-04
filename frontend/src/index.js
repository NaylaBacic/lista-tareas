// Ruta para crear una nueva tarea
app.post('/api/tasks', (req, res) => {
    const { description } = req.body;
    const newTask = { id: tasks.length + 1, description, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);  // Devuelve la tarea recién agregada
  });
  