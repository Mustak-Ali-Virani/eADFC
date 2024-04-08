import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Tasks from '../components/Tasks';

const departments = ["IT", "Central Ops", "Compliance", "Treasury"];

const ChecklistUpdate = ({ onApproval }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  const handleAddTask = (newTaskDescription) => {
    if (newTaskDescription.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        description: newTaskDescription.trim(),
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleApproval = () => {
    onApproval();
  };

  return (
    <div className='flex flex-col p-5 w-[80%] items-center'>
      <h1 className='text-xl'>Department</h1>
      <div className='flex gap-10 p-5 w-full justify-center items-center'>
        <Dropdown options={departments} selectedOption={selectedDepartment} onSelect={handleDepartmentChange} />
      </div>

      {/* Render Tasks component with appropriate props */}
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onAddTask={handleAddTask} isLoggedIn={true} userRole="admin" />

      <div className="flex justify-center mt-8">
        <button className='px-6 py-3 text-white bg-teal-700 mr-4' onClick={handleApproval}>Approve</button>
      </div>
    </div>
  );
};

export default ChecklistUpdate;
