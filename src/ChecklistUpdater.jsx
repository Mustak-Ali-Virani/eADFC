import React, { useState } from 'react';
import Tasks from './components/Tasks';
import ChecklistUpdate from './admin/ChecklistUpdate';

const ChecklistUpdater = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [checklistEntries, setChecklistEntries] = useState([]);

  // Function to handle department change
  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
  };

  return (
    <div>
      <ChecklistUpdate onDepartmentChange={handleDepartmentChange} selectedDepartment={selectedDepartment} />
      <Tasks department={selectedDepartment} checklistEntries={checklistEntries} />
    </div>
  );
};

export default ChecklistUpdater;
