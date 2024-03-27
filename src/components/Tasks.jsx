import React, { useState, useEffect } from 'react';
import Task from './Task';
import Status from './Status';
import Remarks from './Remarks';

const Tasks = ({ type }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='container w-full flex justify-center'>
      <table className='border-collapse w-full'>
        <thead>
          <tr>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan="2">{type} - {currentDate}</th>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan="2">Status</th>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan="2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className='px-6 py-3'>
              <Task task={"Do Reconciliation"} />
            </td>
            <td colSpan="2" className='px-6 py-3'>
              <Status placeholder="Status" />
            </td>
            <td colSpan="2" className='px-6 py-3'>
              <Remarks placeholder="Remarks" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className='px-6 py-3'>
              <Task task={"Do Chargebacks"} />
            </td>
            <td colSpan="2" className='px-6 py-3'>
              <Status placeholder="Status" />
            </td>
            <td colSpan="2" className='px-6 py-3'>
              <Remarks placeholder="Remarks" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className='px-6 py-3'>
              <Task task={"Do ATM Cash Loading"} />
            </td>
            <td colSpan="2" className='px-6 py-3'>
              <Status placeholder="Status" />
            </td>
            <td colSpan="2" className='px-6 py-3'>
              <Remarks placeholder="Remarks" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
