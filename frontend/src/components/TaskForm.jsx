import React, { useState } from 'react';
import api from '../api';

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await api.post('tasks/', { title });
      setTitle('');
      fetchTasks(); // update list
    } catch (err) {
      console.error("❌ Error posting task:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
