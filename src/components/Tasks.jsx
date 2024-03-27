import React from 'react'
import Task from './Task'

const Tasks = ({type, date}) => {
  return (
    <div className='container items-end flex flex-col py-5 w-1/2'>
        <div className='container flex justify-between p-5  bg-teal-700'> 
            <h1 className='text-xl text-white'>{type}</h1>
            <h1 className='text-xl text-white'>{date}</h1>
        </div>
        <div className='border border-black p-5 w-full'>
        <Task task={"Do Reconciliation"} status={""} remarks={"Need to be finished"}></Task>
        <Task task={"Do Chargebacks"} status={""} remarks={"Done in time"}></Task>
        <Task task={"Do ATM Cash Loading"} status={""} remarks={"Discussion needed with Manager"}></Task>
        </div>
        <button className='w-[22%] text-white p-2 mt-3 bg-teal-700'>Submit</button>
    </div>
  )
}

export default Tasks