import React from 'react'

const Task = ({task,status,remarks}) => {
  return (
    <div className='container flex justify-between items-center py-5'>
      <h1 className='w-[33%]'>{task}</h1>
      <h1 className='border border-black p-2'>{status}</h1>
      <h1 className='w-[20%]'>{remarks}</h1>
    </div>
  )
}

export default Task