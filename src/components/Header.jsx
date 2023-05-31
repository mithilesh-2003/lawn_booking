import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Header({ gen }) {
  const location = useLocation()

  return (
    <div>
    <div className="bg-green-600 h-20 sticky top-0 z-20 rounded-lg">
      <nav className="max-w-7xl container mx-auto px-3 flex justify-between items-center h-full">
        <div className="flex gap-8">
          <Link to="/" className={location.pathname === "/" ? "text-yellow-500" : "text-white"}>
            Home
          </Link>
          <Link to="/Booking" className={location.pathname === "/Booking" ? "text-yellow-500" : "text-white"}>
            Booking
          </Link>
          <Link to="/Login" className={location.pathname === "/Login" ? "text-yellow-500" : "text-white"}>Login
          </Link>
          <Link to="/Signup" className={location.pathname === "/Signup" ? "text-yellow-500" : "text-white"}>Signup
          </Link>
        </div>
        <div className="flex gap-8">
          <Link to="/MarrigeLawn" className={location.pathname === "/MarrigeLawn" ? "text-yellow-500" : "text-white"}>MarrigeLawn
          </Link>
          <Link to="/Contact" className={location.pathname === "/Contact" ? "text-yellow-500" : "text-white"}>Contact
          </Link>
          <Link to="/Admin" className={location.pathname === "/Admin" ? "text-yellow-500" : "text-white"}>Admin
          </Link>
        </div>
      </nav>
    </div>
  </div>
  );
}

export default Header;
