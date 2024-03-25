import React, { useState } from 'react';

const Checklist = ({ isVisible, onShow, tasks = [] }) => {
  const [checklistItems, setChecklistItems] = useState(
    tasks.map((text) => ({ text, isChecked: false }))
  );
  const [newItemText, setNewItemText] = useState('');

  // Handle checkbox change for an item
  const handleItemChange = (index, isChecked) => {
    const updatedItems = [...checklistItems];
    updatedItems[index] = { ...updatedItems[index], isChecked };
    setChecklistItems(updatedItems);
  };

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

  const toggleVisibility = () => {
    onShow(!isVisible);
  };

  const handleAddItem = () => {
    if (newItemText.trim() !== '') {
      setChecklistItems([...checklistItems, { text: newItemText, isChecked: false }]);
      setNewItemText('');
    }
  };

  return (
    <div className={`border border-gray-300 rounded p-4 ${isVisible ? '' : 'hidden'}`}>
      <h2 className="text-lg font-medium mb-2">Checklist</h2>
      <button onClick={toggleVisibility} className="mb-2 text-blue-500 hover:text-blue-700">
        {isVisible ? 'Hide Checklist' : 'Show Checklist'}
      </button>
      <div className="mb-2">
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Enter new item..."
          className="border border-gray-400 rounded px-2 py-1 mr-2"
        />
        <button onClick={handleAddItem} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Add Item</button>
      </div>
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
