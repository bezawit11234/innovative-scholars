import React from 'react';
import image1 from '../../assets/telephone.png';

function Getintouch() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center py-10 lg:py-20 w-full max-w-6xl px-4 sm:px-6 md:px-8 mx-auto overflow-visible">
      
      {/* Social Buttons */}
      <div className="w-full lg:w-[450px] bg-[#0C3245] p-3 lg:p-6  flex justify-center lg:block">
        <div className="flex flex-row lg:flex-col justify-center gap-6 sm:gap-8 lg:gap-8 lg:pl-14 lg:pr-14">
          {['telegram', 'twitter', 'linkedin', 'facebook'].map((icon) => (
            <button
              key={icon}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-buttonColor flex items-center justify-center hover:bg-green-500 transition-all"
            >
              <i className={`bx bxl-${icon} text-[#0C3245] text-xl sm:text-2xl`}></i>
            </button>
          ))}
        </div>
      </div>

      {/* Combined Contact Form and Image Container */}
      <div className="w-full shadow-md rounded-xl lg:rounded-3xl p-6 sm:p-8 bg-white overflow-visible">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-10 text-center lg:text-left lg:pl-8">Let's Get in Touch</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex flex-col w-full lg:w-auto lg:pl-8">
            {['Full Name', 'Email', 'Message'].map((label, index) => (
              <div key={label} className="mb-4">
                <label className="text-[#0C3245] text-sm sm:text-base lg:text-lg font-medium mb-2 block">
                  {label}
                </label>
                {index === 2 ? (
                  <textarea
                    placeholder="Your message..."
                    className="bg-[#cacdcd] w-full sm:w-[400px] lg:w-[519px] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-buttonColor resize-none"
                  />
                ) : (
                  <input 
                    type={index === 1 ? 'email' : 'text'}
                    placeholder={`Your ${label.toLowerCase()}`}
                    className="bg-[#cacdcd] h-12 w-full sm:w-[400px] lg:w-[519px] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-buttonColor"
                  />
                )}
              </div>
            ))}
            <button className="bg-buttonColor w-full sm:w-36 lg:w-[242px] h-12 lg:h-14 text-white hover:bg-green-600 transition-colors text-lg mt-4 lg:mt-0 mx-auto lg:ml-32">
              Send
            </button>
          </div>
          
          {/* Telephone Image Container */}
          <div className="hidden lg:flex items-center justify-center   p-4 h-[350px] w-[450px] -mt-8">
            <img 
              src={image1} 
              alt="Contact illustration" 
              className="h-[279.38px] w-[400.865px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;