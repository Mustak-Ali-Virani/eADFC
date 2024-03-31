import React from 'react';
import Dropdown from '../components/Dropdown'
import Checklist from '../pages/Checklist';
const departments = ["IT","Central Ops","Compliance", "Treasury"]
const ChecklistUpdate = () => {
  return (
    <div className='flex flex-col p-5 w-[80%] items-center'>
      <h1 className='text-xl'>Department</h1>
      <div className='flex gap-10 p-5 w-full justify-center items-center'>
      <Dropdown options={departments}></Dropdown>
      </div>
      <Checklist></Checklist>
    </div>
  );
};

export default ChecklistUpdate;
