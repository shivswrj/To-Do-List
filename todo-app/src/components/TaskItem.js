import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTask } from '../api';

const TaskItem = ({ task, refreshTasks }) => {
  const handleDelete = () => {
    deleteTask(task.id).then(refreshTasks);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <Link to={`/edit/${task.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
