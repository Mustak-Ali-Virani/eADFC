import React, { useState } from 'react';

const ChecklistItem = ({ text, isChecked, onChange }) => {
  // Handle checkbox change event
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <div className="flex items-center mb-2">
      <input type="checkbox" checked={isChecked} onChange={handleChange} className="form-checkbox h-5 w-5 text-blue-600" />
      <label className="ml-2 text-gray-700">{text}</label>
    </div>
  );
};

const Checklist = ({ isVisible, onShow, tasks = [] }) => { // Set default value for tasks prop
  const [checklistItems, setChecklistItems] = useState(
    tasks.map((text) => ({ text, isChecked: false }))
  );


  // Handle checkbox change for an item
  const handleItemChange = (index, isChecked) => {
    const updatedItems = [...checklistItems];
    updatedItems[index].isChecked = isChecked;
    setChecklistItems(updatedItems);
  };

  const toggleVisibility = () => {
    onShow(!isVisible); // Pass updated visibility state to parent
  };

  return (
    <div className={`border border-gray-300 rounded p-4 ${isVisible ? '' : 'hidden'}`}>
      <h2 className="text-lg font-medium mb-2">Checklist</h2>
      <button onClick={toggleVisibility} className="mb-2 text-blue-500 hover:text-blue-700">
        {isVisible ? 'Hide Checklist' : 'Show Checklist'}
      </button>
      {checklistItems.length > 0 ? (
        checklistItems.map((item, index) => (
          <ChecklistItem
            key={index}
            text={item.text}
            isChecked={item.isChecked}
            onChange={(isChecked) => handleItemChange(index, isChecked)}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default Checklist;
