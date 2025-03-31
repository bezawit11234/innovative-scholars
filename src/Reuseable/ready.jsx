import React from 'react'

function Ready() {
    return (
        <div className='bg-bodyColor2 py-12 md:py-20 flex flex-col items-center text-center w-full mb-0 pb-0'>
          <div className='w-full max-w-6xl px-4 md:px-6'>
            {/* Heading Section */}
            <div className='text-3xl md:text-[42px] leading-tight md:leading-normal text-white'>
              <p className='mb-2'>Ready to help your students succeed?</p>
              <p className='mb-6'>Contact us today</p>
              <p className='text-base md:text-lg font-normal max-w-2xl mx-auto'>
                Discover how Innovative Scholars can make a difference!
              </p>
            </div>
    
            {/* Get Started Button */}
            <button className="bg-buttonColor text-white h-14 md:h-[40px] w-48 md:w-[157.92999267578125px] rounded-md hover:bg-green-600 transition-colors text-lg md:text-xl mt-2 md:mt-4">
              Get Started
            </button>
          </div>
        </div>
      );
}

export default Ready