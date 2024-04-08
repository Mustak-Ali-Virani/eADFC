import React from 'react';
import Tasks from '../components/Tasks';

const Checklist = () => {
  const tasks = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    
  ];

  const handleDeleteTask = (taskId) => {

  };

  return (
    <div>
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        isLoggedIn={true}
        userRole="user"
      />
    </div>
  );
}

export default Checklist;
