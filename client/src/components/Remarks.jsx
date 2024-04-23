import React from 'react';

const Remarks = ({ placeholder }) => {
  return (
    <div className="flex justify-center">
      <input type="text" className="px-3 py-1 bg-transparent font-bold" placeholder={placeholder} />
    </div>
  );
}

export default Remarks;
