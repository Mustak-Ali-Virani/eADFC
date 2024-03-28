import React, { useState } from 'react';
import AdminPage from './AdminPage';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    // Replace this with your actual login logic
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (username === 'admin' && password === '123') {
      // Redirect to Admin Page upon successful login
      setLoggedIn(true);
    } else {
      // Display error message or handle failed login
      alert('Invalid username or password');
    }
  };

  if (loggedIn) {
    // Redirect to Admin Page
    return (
      <AdminPage />
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-50 p-8 rounded shadow-md max-w-md">
        <form id="login-form" className="space-y-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <label htmlFor="username" className="text-sm font-medium w-20">Username:</label>
              <input type="text" id="username" name="username" placeholder="Enter your username" className="flex-grow px-3 py-2 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1" />
            </div>
            <div className="flex flex-row items-center gap-4">
              <label htmlFor="password" className="text-sm font-medium w-20">Password:</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" className="flex-grow px-3 py-2 bg-gray-300 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1" />
            </div>
          </div>
          <button type="submit" className="block w-full px-3 py-2 bg-teal-600 text-white font-medium hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
