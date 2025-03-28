import React, { useState } from "react";
import {Link, useLocation } from "react-router-dom";
import image from '../assets/ff.png';

function Navbar() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${
        isContactPage ? "bg-bodyColor" : "bg-white"
      } text-textColor font-semibold h-16 flex items-center justify-between px-4 md:px-10 lg:px-36 fixed w-full z-50 top-0 transition-all`}
    >
      <div className="flex items-center gap-3">
        <img src={image} alt="Logo" className="h-12 w-auto" />
        <div className="flex flex-col">
          <p className="text-lg font-bold text-textColor">Innovative</p>
          <p className="text-lg font-bold text-textColor">Scholars</p>
        </div>
      </div>
      
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖️" : "☰"}
      </button>
      
      <div className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-white md:flex md:static md:w-auto md:bg-transparent flex-col md:flex-row items-center gap-5 md:gap-10 shadow-md md:shadow-none py-3 md:py-0`}
      >
        <Link to="/" className="py-2 md:py-0" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/aboutus" className="py-2 md:py-0" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/team" className="py-2 md:py-0" onClick={() => setMenuOpen(false)}>Meet the Team</Link>
        <Link to="/contact" className="py-2 md:py-0" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
      <div className="hidden md:block">
        <button className="bg-buttonColor text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
          Start Today
        </button>
      </div>
    </nav>
  );
}

export default Navbar;