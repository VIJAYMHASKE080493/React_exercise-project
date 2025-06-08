import React, { useState, useEffect } from 'react';

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // 📥 LocalStorage se tasks load karo jab component mount ho
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // 💾 Jab bhi tasks change ho, localStorage me save karo
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
