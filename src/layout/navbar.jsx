import React, {useState} from 'react'
import {  Link, useLocation } from "react-router-dom";
import image from '../assets/ff.png';
import 'boxicons/css/boxicons.min.css';

function Navbar() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${
      isContactPage ? "bg-bodyColor" : "bg-white"
    } text-textColor font-semibold h-16 flex items-center justify-between px-4 md:px-10 lg:px-36 fixed w-full z-50 top-0 transition-all shadow-sm`}
  >
    {/* Logo Section*/}
    <div className="flex items-center gap-3">
      <img src={image} alt="Logo" className="h-12 w-auto" />
      <div className="flex flex-col">
        <p className="text-lg font-bold text-textColor">Innovative</p>
        <p className="text-lg font-bold text-textColor">Scholars</p>
      </div>
    </div>
    
    {/* Mobile Menu Button */}
    <button 
      className="md:hidden text-2xl transition-transform hover:scale-110 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      {menuOpen ? (
        <span className="text-2xl">✕</span>
      ) : (
        <span className="text-2xl">☰</span>
      )}
    </button>
    
    {/* Desktop Menu */}
    <div className="hidden md:flex items-center md:gap-28">
      <Link 
        to="/" 
        className="py-2 md:py-0 hover:text-buttonColor transition-colors duration-200"
      >
        Home
      </Link>
      <Link 
        to="/aboutus" 
        className="py-2 md:py-0 hover:text-buttonColor transition-colors duration-200"
      >
        About Us
      </Link>
      <Link 
        to="/team" 
        className="py-2 md:py-0 hover:text-buttonColor transition-colors duration-200"
      >
        Meet the Team
      </Link>
      <Link 
        to="/contact" 
        className="py-2 md:py-0 hover:text-buttonColor transition-colors duration-200"
      >
        Contact Us
      </Link>
    </div>

    <div className="hidden md:block">
      <button className="bg-buttonColor text-white py-2 px-6 rounded-md  hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-md">
        Start Today
      </button>
    </div>
    
    {/* Mobile Drawer */}
    <div className={`${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 h-full w-72 bg-bodyColor flex flex-col shadow-xl transition-all duration-300 ease-in-out z-40`}
    >
      {/* Logo in Drawer Header */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-200">
        <img src={image} alt="Logo" className="h-10 w-auto" />
        <div className="flex flex-col">
          <p className="text-lg font-bold text-textColor">Innovative</p>
          <p className="text-lg font-bold text-textColor">Scholars</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 flex-grow">
        <Link 
          to="/" 
          className="py-4 px-6 border-b border-gray-400 hover:bg-buttonColor rounded-lg transition-all duration-200 flex items-center text-lg font-medium group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="mr-3 "><i className='bx bxs-home text-[#08cf65] text-3xl group-hover:text-white'  ></i></span> Home
        </Link>
        <Link 
          to="/aboutus" 
          className="py-4 px-6 border-b border-gray-400 hover:bg-buttonColor rounded-lg transition-all duration-200 flex items-center text-lg font-medium group"
          onClick={() => setMenuOpen(false)}
        >
          <span className="mr-3"><i className='bx bxl-blogger text-[#08cf65] text-3xl group-hover:text-white'></i>
  </span> 
  About Us
        </Link>
       
        
        <Link 
          to="/team" 
          className="py-4 px-6 border-b border-gray-400 hover:bg-buttonColor rounded-lg transition-all duration-200 flex items-center text-lg font-medium group"
          onClick={() => setMenuOpen(false)}
        >
           <span className="mr-3 text-[#08cf65] text-3xl group-hover:text-white">👥
  </span> 
  Team
        </Link>
        
         <Link 
          to="/contact" 
          className="py-4 px-6 border-b border-gray-400 hover:bg-buttonColor rounded-lg transition-all duration-200 flex items-center text-lg font-medium group"
          onClick={() => setMenuOpen(false)}
          
        >
          <span className="mr-3"><i className='bx bxs-contact text-[#08cf65] text-3xl group-hover:text-white'></i></span> Contact

        </Link>
      </div>
      
      {/* Button at Bottom */}
      <div className="p-4 border-t border-gray-200">
        <button 
          className="w-full py-3  text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="mr-2"></span> Start Today
        </button>
      </div>
    </div>
    
    {/* Overlay */}
    {menuOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30 md:hidden"
        onClick={() => setMenuOpen(false)}
      />
    )}
  </nav>
  );
}

export default Navbar;