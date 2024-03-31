import React , { useState} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AdminPage from './pages/AdminPage.jsx'
import Login from './pages/Login.jsx'

function Main() {
  const [userType, setUserType] = useState(null);

  // Function to handle login
  const handleLogin = (user) => {
    // Perform your login logic here
    // For demonstration purposes, I'm just setting the user type
    setUserType(user);
  };

  // Render component based on user type
  const renderComponent = () => {
    switch (userType) {
      case 'admin':
        return <AdminPage />;
      case 'user':
        return <App />;
      default:
        return <Login onLogin={handleLogin} />;
    }
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        {renderComponent()}
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);