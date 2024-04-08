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
    <div className='relative h-screen'>
      <div className='container flex justify-center items-center'>
        <Tasks type={"Daily"} isApproved={isApproved} />
      </div>
    </div>
  );
}

export default Checklist;
