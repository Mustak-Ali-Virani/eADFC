import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Checklist from '../pages/Checklist';

const departments = ["IT", "Central Ops", "Compliance", "Treasury"];

const ChecklistUpdate = ({ onDepartmentChange, selectedDepartment }) => {
  const [checklistEntries, setChecklistEntries] = useState([]);

  // Function to handle department change
  const handleDepartmentChange = (department) => {
    onDepartmentChange(department);
  };

  return (
    <div className='flex flex-col p-5 w-[80%] items-center'>
      <h1 className='text-xl'>Department</h1>
      <div className='flex gap-10 p-5 w-full justify-center items-center'>
        <Dropdown options={departments} selectedOption={selectedDepartment} onSelect={handleDepartmentChange} />
      </div>
      <div>
        <h2 className='text-xl mt-5'>Checklist</h2>
        <Checklist entries={checklistEntries} setEntries={setChecklistEntries} />
      </div>
    </div>
  );
};

export default ChecklistUpdate;
