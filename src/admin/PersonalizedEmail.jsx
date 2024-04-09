import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Mail from '../components/Mail';

const departments = ["IT", "Compliance", "Treasury"];

const PersonalizedEmail = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');

  return (
    <div className='flex flex-col p-5 w-[80%] items-center gap-5'>
      <h1 className='text-xl'>Department</h1>
      <Dropdown
        options={departments}
        onSelect={(value) => setSelectedDepartment(value)}
      />
      <Mail department={selectedDepartment} />
    </div>
  );
};

export default PersonalizedEmail;
