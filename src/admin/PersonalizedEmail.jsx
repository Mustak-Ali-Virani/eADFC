import React from 'react';
import Dropdown from '../components/Dropdown'
import Mail from '../components/Mail'
const department=["IT","Compliance","Treasury"]
const PersonalizedEmail = () => {
  return (
    <div className='flex flex-col p-5 w-[80%] items-center gap-5'>
      <h1 className='text-xl'>Department</h1>
      <Dropdown options={department}></Dropdown>
      <Mail></Mail>
    </div>
  );
};

export default PersonalizedEmail;
