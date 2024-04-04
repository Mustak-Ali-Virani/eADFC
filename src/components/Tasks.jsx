import React, { useState, useEffect } from 'react';
import Task from './Task';
import Status from './Status';
import Remarks from './Remarks';
import { TrashIcon } from '@heroicons/react/outline';
import { PlusCircleIcon } from '@heroicons/react/solid';

const Tasks = ({ isLoggedIn, userRole }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Fetch tasks from the server or any data source
    // For demonstration, let's use a hardcoded array of tasks
    const tasksData = [
      { id: 1, description: 'Task 1' },
      { id: 2, description: 'Task 2' },
      // Add more tasks as needed
    ];
    setTasks(tasksData);
    setLoading(false);
  }, []);

  const handleAddTask = () => {
    if (newTaskDescription.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        description: newTaskDescription.trim(),
      };
      setTasks([...tasks, newTask]);
      setNewTaskDescription('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleSubmit = () => {
    // Your approval logic goes here
    setIsApproved(true);
  };

  return (
    <div className='container w-full flex justify-center'>
      <table className='border-collapse w-full'>
        <thead>
          <tr>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan='2'>
              Tasks - {currentDate}
            </th>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan='2'>
              Status
            </th>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan='2'>
              Remarks
            </th>
            <th className='px-6 py-3 bg-teal-700 text-white text-2xl' colSpan='2'>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan='6' className='px-6 py-3 text-center'>
                Loading...
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td colSpan='2' className='px-6 py-3'>
                  <Task task={task.description} />
                </td>
                <td colSpan='2' className='px-6 py-3'>
                  <Status placeholder='Status' />
                </td>
                <td colSpan='2' className='px-6 py-3'>
                  <Remarks placeholder='Remarks' />
                </td>
                <td>
                  {isLoggedIn && userRole === 'admin' && (
                    <button onClick={() => handleDeleteTask(task.id)}>
                      <TrashIcon className='h-5 w-5 text-red-500' aria-hidden='true' />
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
          <tr>
            <td colSpan='2'>
              <input
                type='text'
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                placeholder='New Task'
              />
            </td>
            <td colSpan='6' className='px-6 py-3'>
              <div className="flex justify-between items-center">
                <button className='flex items-center px-4 py-2' onClick={handleAddTask}>
                  <PlusCircleIcon className="h-4 w-4 mr-1 text-teal-700" />
                </button>
                <button
                  className={`px-6 py-3 text-white bg-teal-700 ${isSubmitted || isApproved ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                  onClick={handleSubmit}
                  disabled={isSubmitted || isApproved}
                >
                  {isSubmitted ? 'Approving...' : 'Submit'}
                </button>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
