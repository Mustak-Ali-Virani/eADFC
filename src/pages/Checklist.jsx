import React from 'react'

import Tasks from '../components/Tasks'

const Checklist = () => {
  return (
    <div className='container flex justify-center items-center flex-col'>
        <h1 className='py-10 text-5xl'>Information Technology (IT)</h1>
      <Tasks type={"Daily"} date={"12/03/2024"}></Tasks>
    </div>
  )
}

export default Checklist