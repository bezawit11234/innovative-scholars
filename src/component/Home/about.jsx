import React from 'react';
import image2 from '../../assets/greenLine.png';
import image3 from '../../assets/A+.png';

function About() {
  return (
    <div className='bg-white px-4 sm:px-6 md:px-8 lg:px-24 py-8'>
      {/* Title */}
      <p className='text-4xl md:text-6xl lg:text-[90px] font-bold text-[#0C3245] md:pl-12 lg:pl-24 opacity-[17%] text-center md:text-left'>
        About Us
      </p>
      
      {/* Content Container */}
      <div className='bg-bodyColor2 w-full max-w-[1248px] h-auto md:h-[428px] mx-auto my-8 md:my-[90px] rounded-[12px] p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16'>
        {/* Text Content */}
        <div className='flex-1'>
          <h1 className='pb-4 pt-0 md:pt-12 text-2xl sm:text-3xl md:text-4xl lg:text-[33.9px] font-semibold leading-tight text-white'>
            <span className='block'>Bridging the Gap in Education</span>
            <span className='block'>for Every Learner</span>
            <div className='pl-2 md:pl-10'>
              <img 
                src={image2} 
                alt="line" 
                className='w-[150px] sm:w-[180px] md:w-[217px] h-[8px] sm:h-[10px] md:h-[12px] pl-2 md:pl-4'
              />
            </div>
          </h1>
          
          <p className='text-sm sm:text-base md:text-[18.6px] text-white w-full max-w-[700px] font-thin mb-6'>
            At Innovative Scholars, we believe every student deserves the opportunity to succeed.
            By partnering with schools, we provide personalized tutoring, advocacy, and innovative learning 
            solutions to help students improve their academic performance and unlock their full potential.
          </p>
          
          <button className="w-full sm:w-auto bg-white text-bodyColor2 font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-md hover:bg-slate-300 transition-colors text-base sm:text-lg md:text-xl">
            Read More
          </button>
        </div>
        
        {/* Image */}
        <div className='flex-1 flex justify-center md:justify-end'>
          <img 
            src={image3} 
            alt="A+ image" 
            className='w-full max-w-[400px] md:max-w-[495px] h-auto md:h-[300px] object-cover rounded-lg shadow-xl'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
