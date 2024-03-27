import React from 'react';

const Status = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center justify-center">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="form-checkbox h-5 w-5 text-teal-600 mr-2" 
      />
      <span>{label}</span>
    </label>
  );
}

export default Status;
