import React from 'react'
import Footer from '../layout/footer';  
import Ready from '../Reuseable/ready';
import 'boxicons/css/boxicons.min.css';
import Hero from '../component/Home/hero';
import About from '../component/Home/about';
import Service from '../component/Home/service';
import Testimonal from '../component/Home/testimonal';
function Home() {
  return (
    <div className='bg-bodyColor min-h-screen w-full'>
  <Hero />
  <About />
  <Service />   
  <Testimonal />




  <div className="flex flex-col items-center w-full">
        <Ready />
    <div className='bg-bodyColor2 py-12 md:py-20 flex flex-col items-center text-center w-full md:mt-0 md:pt-0'>
        <div className='w-full max-w-6xl px-4 md:px-6 '>
          <p className='text-base md:text-lg font-normal mt-0 mb-6 text-white'>
              Sign up for a Newsletter of Innovative scholars today.
          </p>
    
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-md md:max-w-2xl mx-auto'>
              <input 
                type="text" 
                placeholder='Enter your email' 
                className='bg-gray-50 text-black h-14 md:h-16 w-full md:w-72 rounded-md text-sm md:text-base px-4 transition focus:outline-none focus:ring-2 focus:ring-buttonColor'
              />
              <button className="bg-buttonColor text-white px-6 py-3 md:py-4 rounded-md hover:bg-green-600 transition-colors text-base md:text-lg w-full md:w-auto">
                Subscribe for Updates
              </button>
            </div>
        </div>
      </div>
  </div>
       <div>
      <Footer />
      </div> 







      
</div>
   
  );
}

export default Home
