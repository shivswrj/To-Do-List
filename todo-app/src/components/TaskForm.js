import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTask, createTask, updateTask } from '../api';
import './TaskForm.css';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  });

  useEffect(() => {
    if (id) {
      fetchTask(id).then((data) => setTask(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(id, task).then(() => navigate('/'));
    } else {
      createTask(task).then(() => navigate('/'));
    }
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit Task' : 'Create Task'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{id ? 'Update Task' : 'Create Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
