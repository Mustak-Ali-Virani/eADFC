import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Calendar from '../components/Calendar';
import jsPDF from 'jspdf';

const departments = ["IT", "Central Ops", "Compliance", "Treasury"];

const GenerateReport = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleGeneratePDF = () => {
    if (selectedDate && selectedDepartment) {
      const fileName = `${selectedDate}.pdf`;
      const pdf = new jsPDF();
      pdf.text(`Date: ${selectedDate}`, 10, 10);
      pdf.text(`Department: ${selectedDepartment}`, 10, 20);
      pdf.save(fileName);
    } else {
      alert('Please select both a date and a department before generating the report.');
    }
  };

  return (
    <div className='flex flex-col p-5 w-[80%] items-center'>
      <h1 className='text-xl'>Department</h1>
      <div className='flex flex-col gap-10 p-5 w-full justify-center items-center relative'>
        <Dropdown
          options={departments}
          onSelect={(value) => setSelectedDepartment(value)}
        />
        <Calendar
          onSelectDate={(date) => setSelectedDate(date)}
        />
        <button onClick={handleGeneratePDF} className='bg-teal-700 text-white rounded p-2'>Generate Report</button>
      </div>
    </div>
  );
};

export default GenerateReport;
