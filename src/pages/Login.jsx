import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form id="login-form" className="space-y-4">
          <div>
            <label for="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1" />
          </div>
          <div>
            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1" />
          </div>
          <button type="submit" className="block w-full px-3 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
        <p className="text-center text-gray-500 mt-4">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
