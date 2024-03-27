import React from 'react';
import Tasks from '../components/Tasks';

const Checklist = () => {
  return (
    <div className='relative h-screen'>
      <div className='container flex justify-center items-center'>
        <Tasks type={"Daily"} />
      </div>
    </div>
  );
}

export default Checklist;
