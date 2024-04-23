import React from 'react';
import { Route, NavLink, Routes, Navigate } from 'react-router-dom';
import { LogoutIcon } from '@heroicons/react/outline';
import GenerateReport from '../admin/GenerateReport.jsx';
import ChecklistUpdate from '../admin/ChecklistUpdate';
import PersonalizedEmail from '../admin/PersonalizedEmail';
import AddUser from '../admin/AddUser';
import ErrorBoundary from '../components/ErrorBoundary';
import backgroundImage from '../assets/hblgreen.png';

const AdminPage = () => {
  const handleLogout = () => {
    window.location.href = '/login'; 
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '80% auto', backgroundPosition: 'right center', height: '100vh' }}>
      <div>
        <h1 className='px-6 py-3 bg-teal-700 text-white text-2xl'>Checker</h1>
      </div>
      <div className="flex">
        <div className="bg-custom-green w-1/8 h-screen">
          <ul className="flex flex-col gap-8 p-4">
            <li key="generate-report" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/generate-report" className="font-bold text-white text-xl truncate block p-2">
                Generate Report
              </NavLink>
            </li>
            <li key="checklist-update" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/checklist-update" className="font-bold text-white text-xl truncate block p-2">
                Checklist Update
              </NavLink>
            </li>
            <li key="personalized-email" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/personalized-email" className="font-bold text-white text-xl truncate block p-2">
                Personalized Email
              </NavLink>
            </li>
            <li key="add-user" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/add-user" className="font-bold text-white text-xl truncate block p-2">
                Add User
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-3/4 p-4">
          <ErrorBoundary>
            <Routes>
              <Route path="/admin/generate-report" element={<GenerateReport />} />
              <Route path="/admin/checklist-update" element={<ChecklistUpdate />} />
              <Route path="/admin/personalized-email" element={<PersonalizedEmail />} />
              <Route path="/admin/add-user" element={<AddUser />} />
              <Route path="/admin/logout" element={<Navigate to="/login" />} />
            </Routes>
          </ErrorBoundary>
          <div className="absolute top-0 right-0 p-4">
            <LogoutIcon className="h-8 w-8 text-white cursor-pointer" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;