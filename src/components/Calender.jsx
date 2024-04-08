import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto mt-5 items-center flex flex-col gap-5">
      <h1>Time Period</h1>
      <div className="flex justify-center ">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500 text-center"
        />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500 text-center mr-2"
        />
         <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy 'Q'q"
          showQuarterYearPicker
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500 text-center"
        />
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy 'Week' w"
          showWeekNumbers
          className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500 text-center mr-2"
        />
      </div>
      
    <button className='bg-teal-700 text-white rounded p-2 '>Generate Report</button>

    </div>
  );
};

export default Calendar;
