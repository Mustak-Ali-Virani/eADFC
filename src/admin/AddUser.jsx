import React from 'react';
import Dropdown from "../components/Dropdown"
import Form from "../components/Form"
const department = ["IT","Central Ops","Compliance", "Treasury"]
const AddUser = () => {
  return (
    <div className='flex flex-col p-5 w-[80%] items-center gap-5'>
      <h1 className='text-xl'>Department</h1>
      <Dropdown options={department}></Dropdown>
      <Form></Form>
    </div>
  );
};

export default AddUser;
