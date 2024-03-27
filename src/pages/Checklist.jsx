import React from 'react';
import Tasks from '../components/Tasks';

const Checklist = () => {
  return (
    <div className='relative h-screen'>
      <div className='container flex justify-center items-center'>
        <Tasks type={"Daily"} />
      </div>
      <button className='px-6 py-3.5 absolute bottom-5 right-5 text-white p-2 bg-teal-700'>Submit</button>
    </div>
  );
}

export default Checklist;
