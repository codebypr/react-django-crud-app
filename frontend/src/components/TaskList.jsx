import React from 'react';
import api from '../api';

function TaskList({ tasks, fetchTasks }) {
  const deleteTask = async id => {
    await api.delete(`tasks/${id}/`);
    fetchTasks();
  };

  const toggleComplete = async task => {
    await api.put(`tasks/${task.id}/`, {
      ...task,
      completed: !task.completed
    });
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(task)}
          >
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
