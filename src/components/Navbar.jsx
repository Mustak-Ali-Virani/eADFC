import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Checklist from '../pages/Checklist';  

export default function Navbar() {
  const [showChecklist, setShowChecklist] = useState(false);

  const handleShowChecklist = () => {
    setShowChecklist(!showChecklist);
  };

  return (
    <nav className="bg-custom-green p-4">
      <div className="container flex mx-auto justify-between items-center">
        <div className="w-[230px]">
          <img src='src\assets\hbllogo.png' className='w-[50%] h-[50]'></img>
        </div>
        <ul className="flex space-x-[100px]">
          <CustomLink to="/" className="text-white">Home</CustomLink>
          <CustomLink to="/pages/Tutorial" className="text-white">Tutorial</CustomLink>
          <CustomLink to="/pages/Checklist" onClick={handleShowChecklist} className="text-white">Checklist</CustomLink> 
          <CustomLink to="/pages/Login" className="text-white">Login</CustomLink>
        </ul>
      </div>
      {showChecklist && <Checklist />} 
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={to} {...props} className={isActive ? "active text-white" : "text-white"}>  {/* Apply text-white directly or conditionally */}
      {children}
    </Link>
  )
}
