import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import GenerateReport from  '../admin/GenerateReport.jsx';
import ChecklistUpdate from '../admin/ChecklistUpdate';
import PersonalizedEmail from '../admin/PersonalizedEmail';
import AddUser from '../admin/AddUser';
import ErrorBoundary from '../components/ErrorBoundary';

const AdminPage = () => {
  return (
    <>
      <div>
        <h1 className='px-6 py-3 bg-teal-700 text-white text-2xl'>Checker</h1>
      </div>
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-custom-green w-1/4 h-screen">
          <ul className="flex flex-col gap-8 p-4">
            <li key="generate-report" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/generate-report" className="font-bold text-white text-3xl truncate block p-2">
                Generate Report
              </NavLink>
            </li>
            <li key="checklist-update" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/checklist-update" className="font-bold text-white text-3xl truncate block p-2">
                Checklist Update
              </NavLink>
            </li>
            <li key="personalized-email" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/personalized-email" className="font-bold text-white text-3xl truncate block p-2">
                Personalized Email
              </NavLink>
            </li>
            <li key="add-user" className="hover:bg-white hover:bg-opacity-30">
              <NavLink to="/admin/add-user" className="font-bold text-white text-3xl truncate block p-2">
                Add User
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4">
          {/* Routes */}
          <ErrorBoundary>
           <Routes> 
            <Route path="/admin/generate-report" component={GenerateReport} />
            <Route path="/admin/checklist-update" component={ChecklistUpdate} />
            <Route path="/admin/personalized-email" component={PersonalizedEmail} />
            <Route path="/admin/add-user" component={AddUser} />
            </Routes> 
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
