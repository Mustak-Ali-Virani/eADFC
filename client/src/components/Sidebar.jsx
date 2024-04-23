import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (

        <div className='flex flex-col  items-center gap-5 p-5 bg-teal-500 text-center h-screen w-[10%]'>
            <div className='flex flex-col gap-5 items-center '>
              <a className='font-thin text-white text-2xl hover:text-black  cursor-pointer'>
                <Link to="/report">Generate Report</Link>
              </a>
              <a className='font-thin text-white text-2xl hover:text-black  cursor-pointer'>
                <Link to="/updatelist">Update Checklist</Link>
              </a>
              <a className='font-thin text-white text-2xl hover:text-black  cursor-pointer'>
                <Link to="/email">Personalize Email</Link>
              </a>
              <a className='font-thin text-white text-2xl hover:text-black  cursor-pointer'>
                <Link to="/adduser">Add User</Link>
              </a>
            </div>
        </div>

  )
}

export default Sidebar