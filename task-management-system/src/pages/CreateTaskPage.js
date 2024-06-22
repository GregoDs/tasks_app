import React from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import { createTask } from '../api';
import './CreateTaskPage.css';

const CreateTaskPage = () => {
  const handleSubmit = async (task) => {
    await createTask(task);
    // Redirect to the task list page or show a success message
  };

  return (
    <div className="create-task-wrapper">
     
      <div className="create-task-container">
        <h2>Create Task</h2>
        <TaskForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateTaskPage;

