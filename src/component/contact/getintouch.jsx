import React from 'react'
import image1 from '../assets/telephone.png';
function Getintouch() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row items-center py-10 lg:py-20 w-full max-w-6xl">
        
    {/* Social Buttons - Now horizontal on mobile */}
    <div className="w-full lg:w-[450px] bg-[#0C3245] p-3 lg:p-6 lg:ml-10 ">
      <div className="flex flex-row lg:flex-col justify-center gap-8 lg:gap-8 lg:pl-24">
        {['telegram', 'twitter', 'linkedin', 'facebook'].map((icon) => (
          <button
            key={icon}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-buttonColor flex items-center justify-center hover:bg-green-500 transition-all"
          >
            <i className={`bx bxl-${icon} text-[#0C3245] text-xl lg:text-2xl`}></i>
          </button>
        ))}
      </div>
    </div>

    {/* Contact Form - Unchanged except for order */}
    <div className="w-full max-w-2xl lg:max-w-none shadow-md rounded-xl lg:rounded-3xl p-6 lg:p-8 bg-white lg:ml-[-150px] lg:mr-[-550px]">
      <p className="text-2xl lg:text-3xl ml-20 font-semibold mb-10">Let's Get in Touch</p>
      
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:ml-20 space-x-20">
        <div className="flex flex-col">
          {['Full Name', 'Email', 'Message'].map((label, index) => (
            <div key={label} className="mb-4">
              <label className="text-[#0C3245] text-base lg:text-lg font-medium mb-2 block">
                {label}
              </label>
              {index === 2 ? (
                <textarea
                  placeholder="Your message..."
                  className="bg-[#cacdcd] lg:w-[519px] w-80 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-buttonColor resize-none"
                />
              ) : (
                <input 
                  type={index === 1 ? 'email' : 'text'}
                  placeholder={`Your ${label.toLowerCase()}`}
                  className="bg-[#cacdcd] h-12 lg:w-[519px] w-80 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-buttonColor"
                />
              )}
            </div>
          ))}
          <button className="bg-buttonColor w-36 lg:w-[242px] h-12 lg:h-14 text-white hover:bg-green-600 transition-colors text-lg ml-20 lg:ml-32">
            Send
          </button>
        </div>
        
        {/* Telephone Image - Hidden on mobile */}
        <div className="hidden lg:flex flex-shrink-0 -mt-32 -ml-10">
          <img 
            src={image1} 
            alt="Contact illustration" 
            className="h-auto max-w-[400.86517333984375px] object-contain -ml-8" 
          />
        </div>
      </div>
    </div>
  
  
  </div>

  )
}

export default Getintouch