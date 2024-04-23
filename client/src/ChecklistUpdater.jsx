import React, { useState } from 'react';
import ChecklistUpdate from './admin/ChecklistUpdate';
import Tasks from './components/Tasks';

const ChecklistUpdater = () => {
  const [isApproved, setIsApproved] = useState(false);

  const handleApproval = () => {
    setIsApproved(true);
  };

  return (
    <>
      <ChecklistUpdate onApproval={handleApproval} isApproved={isApproved} />
      <Tasks type={"Daily"} isApproved={isApproved} />
    </>
  );
}

export default ChecklistUpdater;
