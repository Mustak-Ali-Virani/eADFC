import React, { useState } from 'react';
import ChecklistUpdate from './admin/ChecklistUpdate';
import Tasks from './components/Tasks';

const ChecklistUpdater = () => {
  const [isApproved, setIsApproved] = useState(false);

  // Function to handle approval
  const handleApproval = () => {
    setIsApproved(true);
  };

  return (
    <>
      <ChecklistUpdate onApproval={handleApproval} />
      {/* Assuming this Tasks component is for a different purpose */}
      <Tasks type={"Daily"} isApproved={isApproved} />
    </>
  );
}

export default ChecklistUpdater;
