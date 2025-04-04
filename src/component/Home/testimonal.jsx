import React from 'react';
import image8 from '../../assets/profile.png';
import image9 from '../../assets/comma1.png';
import image10 from '../../assets/test.png';

function Testimonial() {
  return (
    <div className='bg-white flex flex-col lg:flex-row px-4 lg:px-8 xl:px-20 py-8 w-full overflow-x-hidden'>
      {/* Text Content */}
      <div className='text-[16.7px] lg:ml-10 xl:ml-20 w-full lg:w-[45%]'>
        <p className='text-4xl sm:text-6xl lg:text-[90px] font-bold text-[#0C3245] opacity-[17%]'>
          Testimonials
        </p>
        
        <div className='mt-4 max-w-[600px]'>
          <p>Our personalized learning solutions have helped countless 
          students improve their grades, gain confidence,
          and achieve their full potential. But don't just take our word for it—</p>
          <p className='font-semibold'>see what parents, educators, and students have to say about their experiences with us!</p>
        </div>

        {/* First Testimonial Card */}
        <div className="mt-6 border-2 rounded-[8px] border-[#08CF65] w-full max-w-[388px] h-[184px] flex flex-col items-center justify-center font-light text-[15.1px] relative mx-auto lg:mx-0">
          <img
            src={image9}
            alt="quote"
            className="absolute h-[17px] w-[36px] -top-2 left-4 z-10"
          />
          
          <p className='ml-4 mt-4 mb-6'>"Innovative Scholars transformed my child's learning experience. Their tutoring program helped my son go from failing grades to excelling in school!"</p>
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <img
              src={image8}
              alt="profile"
              className="w-[40px] h-[40px] rounded-full border-2 border-white"
            />
            <span className="text-[14px] font-semibold text-[#0C3245] whitespace-nowrap">
              Sarah M., Parent
            </span>
          </div>
        </div>

        {/* Second Testimonial Card */}
        <div className="relative mt-10 w-full max-w-[388px] mx-auto lg:mx-0">
          <div className="mt-6 border-2 border-t-2 border-l-2 border-r-2 border-b-0 rounded-t-[8px] border-[#08CF65] h-[70px] overflow-hidden relative">
            <img
              src={image9}
              alt="quote"
              className="absolute h-[17px] w-[36px] left-4 -top-2 z-10"
            />
            <p className="pt-6 px-4 text-[15.1px] font-light">
              "Thanks to Innovative Scholars, our students have shown remarkable improvement in their
            </p>
          </div>
          <div className="w-full h-[30px] bg-white relative -top-[1px] border-l-2 border-r-2 border-[#08CF65]"></div>
        </div>
      </div>

      
      <div className='mt-10 lg:mt-0 flex justify-center lg:justify-end lg:w-[55%]'>
        <img
          src={image10}
          alt="testimonial illustration"
          className="h-auto max-h-[510px] w-full max-w-[90%] lg:max-w-[702px] object-contain"
        />
      </div>
    </div>
  );
}

export default Testimonial;