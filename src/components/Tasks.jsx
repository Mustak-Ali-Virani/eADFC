import React, { useState, useEffect } from 'react';
import Task from './Task';
import Status from './Status';
import Remarks from './Remarks';

const Tasks = ({ type }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = () => {
    // Your submission logic goes here
    setIsSubmitted(true);
  };

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
            <td colSpan="6" className='px-6 py-3 text-left'>
              <div className= "text-left">
                <h1 className='font-bold text-4xl'>Information Technology (IT)</h1>
                <hr className="border-b-2 border-teal-700 w-full " style={{textAlign: 'left'}} /> 
              </div>
            </td>
          </tr>
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
          <tr>
            <td colSpan="5"></td>
            <td colSpan="2" className='px-6 py-3 text-right'>
              <button
                className={`px-6 py-3 text-white bg-teal-700 ${isSubmitted ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Approving...' : 'Submit'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
