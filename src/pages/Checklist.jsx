import React from 'react';
import Tasks from '../components/Tasks';

const Checklist = ({ isApproved }) => {
  return (
    <div className='relative h-screen'>
      <div className='container flex justify-center items-center'>
        <Tasks type={"Daily"} isApproved={isApproved} />
      </div>
    </div>
  );
}

export default Checklist;
