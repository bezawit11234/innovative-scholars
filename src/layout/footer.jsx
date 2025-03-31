import React from 'react'
import image from '../assets/ff.png';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className='bg-bodyColor min-h-[100vh] pb-[60px] sm:pb-0 w-full text-4xl font-semibold'>
      {/* Logo Section */}
      <div className='flex flex-col sm:flex-row sm:space-x-72 sm:mt-40 sm:ml-28 sm:pt-20 items-center text-center sm:text-left'>
        <div className="flex items-center space-x-3">
          <img 
            src={image} 
            alt="Logo" 
            className="h-[95px] w-[88px]"
          />
          <div className="flex flex-col leading-normal">
            <p className="text-[28px] sm:text-[40px] font-bold text-textColor">Innovative</p>
            <p className="text-[28px] sm:text-[40px] font-bold text-textColor">Scholars</p>
          </div>
        </div>
      </div>

      {}
      <div className='flex flex-col sm:flex-row sm:space-x-52 items-center text-center sm:text-left mt-5'>
        {}
        <div className='h-[195px] w-full sm:w-[412px] px-4 sm:ml-20'>
          <p className='text-[14px] sm:text-[18px] font-normal'>
            At Innovative Scholars, we take pride in making a real difference in students' academic journeys. Our personalized tutoring, advocacy, and innovative learning solutions have helped countless students improve their grades, gain confidence, and achieve their full potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className='mt-5 sm:mt-0'>
          <p className='text-xl sm:text-2xl font-bold'>QUICK LINKS</p>
          <div className="flex flex-col gap-3 sm:gap-5 mt-3 text-[15px] sm:text-[17px] font-semibold">
            <Link to="/" className='hover:text-blue-500'>Home</Link>
            <Link to="/aboutus" className='hover:text-blue-500'>About Us</Link>
            <Link to="/team" className='hover:text-blue-500'>Meet the Team</Link>
            <Link to="/contact" className='hover:text-blue-500'>Contact Us</Link>
          </div>
        </div>

        {/* Contact */}
        <div className='mt-5 sm:mt-0'>
          <p className='text-xl sm:text-2xl font-bold'>CONTACT US</p>
          <div className='text-[15px] sm:text-[17px] font-normal mt-3'>
            <p className="flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-5 text-lg sm:text-2xl">
              <span className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-buttonColor flex items-center justify-center">
                <i className="bx bxs-map text-white text-[20px]"></i>
              </span>
              <span>*******, Addis Ababa, Ethiopia</span>
            </p>
            <p className='flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-5 text-lg sm:text-2xl'>
              <span className='w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-buttonColor flex items-center justify-center'>
                <i className='bx bxs-phone text-white text-[20px]'></i>
              </span>
              <span>+251-904-**** / +251-91******</span>
            </p>
            <p className='flex items-center space-x-4 sm:space-x-6 mb-3 sm:mb-5 text-lg sm:text-2xl'>
              <span className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-buttonColor flex items-center justify-center">
                <i className="bx bxs-envelope text-white text-[20px]"></i>
              </span>
              <a href="mailto:info@innovativescholars.com" className="hover:text-blue-500">
                info@innovativescholars.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className='flex justify-center sm:justify-start gap-4 mt-10 sm:mt-20 mb-16 px-4 sm:ml-28'>
        {['telegram', 'twitter', 'linkedin', 'facebook'].map((icon) => (
          <button 
            key={icon}
            className='w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-buttonColor flex items-center justify-center'
          >
            <i className={`bx bxl-${icon} text-white text-[24px] sm:text-[26px]`}></i>
          </button>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white fixed bottom-0 left-0 w-full h-[60px] shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center h-full px-4 sm:px-6 font-normal">
          <p className="flex items-center space-x-2">
            <i className="bx bx-copyright text-xl"></i>
            <span className="text-[12px] sm:text-[14px]">2024 I.scholars. All Rights Reserved.</span>
          </p>
          <span className="text-[12px] sm:text-[18px] mt-2 sm:mt-0">
            Powered by .............................
          </span>
        </div>
      </footer>
    </div>
  


  )
}

export default Footer