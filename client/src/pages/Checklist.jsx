import React, { useState } from 'react';
import Tasks from '../components/Tasks';

const Checklist = () => {
  const [isApproved, setIsApproved] = useState(false); // Define isApproved state variable

  const tasks = [
    { id: 1, description: 'Task 1' },
    { id: 2, description: 'Task 2' },
    // Add more tasks as needed
  ];

  const handleDeleteTask = (taskId) => {
    // Handle delete task logic here
  };

  return (
    <div className='relative h-screen'>
      <div className='container flex justify-center items-center'>
        {/* Pass tasks and isApproved as props to the Tasks component */}
        <Tasks tasks={tasks} type={"Daily"} isApproved={isApproved} />
      </div>
    </div>
  );
}

export default Checklist;

