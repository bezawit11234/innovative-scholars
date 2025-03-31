import React from 'react'
import image1 from '../../assets/image1.png';
import 'boxicons/css/boxicons.min.css';
function Hero() {
    return (
       <div className='container mx-auto px-4 sm:px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-8'>
           {/* Text Content */}
           <div className='w-full md:w-1/2 text-center md:text-left'>
             <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[54.6px] sm:font-bold md:font-semibold lg:font-semibold leading-tight md:leading-normal text-textColor'>
               <span className='block'>Empowering Students</span>
               <span className='block'>To Succeed,</span>
               <span className='block'>One Step at a Time</span>
             </h1>
             
             <p className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#2B3857]'>
               Partnering with schools to provide personalized learning experiences that help students reach their full potential.
             </p>
             
             <button className="mt-6 sm:mt-8 bg-buttonColor text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-green-600 transition-colors text-lg sm:text-xl">
               Start Learning Today
             </button>
             
             <div className='mt-8 sm:mt-10 flex items-center justify-center md:justify-start gap-3 text-[#0A615A]'>
               <svg className='w-6 h-6 sm:w-7 sm:h-7 text-[#0A615A]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                 <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 
                 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 
                 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"/>
               </svg>
               <p className='text-lg sm:text-xl'>Discover Our Programs</p>
             </div>
           </div>
       
           {/* Image */}
           <div className='w-full md:w-1/2 mt-8 md:mt-0'>
             <img 
               src={image1} 
               alt="Students learning" 
               className='w-full h-auto max-w-full object-cover rounded-lg shadow-xl'
             />
           </div>
         </div>
       
      );
}

export default Hero;