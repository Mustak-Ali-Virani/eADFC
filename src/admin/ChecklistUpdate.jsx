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

  // Function to handle approval
  const handleApproval = () => {
    onApproval();
  };

  return (
    <div className='flex flex-col p-5 w-[80%] items-center'>
      <h1 className='text-xl'>Department</h1>
      <div className='flex gap-10 p-5 w-full justify-center items-center'>
        <Dropdown options={departments} selectedOption={selectedDepartment} onSelect={handleDepartmentChange} />
      </div>
      <div>
        <Tasks type={"Daily"} />
      </div>
    </div>
  );
};

export default ChecklistUpdate;
