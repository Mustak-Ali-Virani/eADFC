import React from 'react';
import Dropdown from '../components/Dropdown';
import Calendar from '../components/Calender';
const departments = ["IT","Central Ops","Compliance", "Treasury"]
const GenerateReport = () => {
  return (
    <div className='flex flex-col p-5 w-[80%] items-center'>
      <h1 className='text-xl'>Department</h1>
      <div className='flex flex-col gap-10 p-5 w-full justify-center items-center'>
      <Dropdown options={departments}></Dropdown>  
      <Calendar></Calendar>
      </div>
      
    </div>
  );
};

export default GenerateReport;