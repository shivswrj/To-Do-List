import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../api';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    refreshTasks();
  }, []);

  const refreshTasks = () => {
    fetchTasks().then(setTasks);
  };

  const handleDelete = (id) => {
    deleteTask(id).then(refreshTasks);
  };

  return (
    <div className="container">
      <header>
        <h1>To-Do List</h1>
        <div className="actions">
          <Link to="/create"><button>Add New Task</button></Link>
        </div>
      </header>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-info">
              <h2>{task.title}</h2>
              <p>Status: {task.status}</p>
              <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            <div className="task-actions">
              <Link to={`/edit/${task.id}`}><button>Edit</button></Link>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
