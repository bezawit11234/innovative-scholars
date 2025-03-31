import React from 'react'
import image4 from '../../assets/s1.png';
import image5 from '../../assets/s2.png';
import image6 from '../../assets/s3.png';
function Service() {
  return (
    <div className="bg-[#EBEDF5] py-8">
    <p className='text-4xl md:text-7xl lg:text-[90px] font-bold text-[#0C3245] px-4 md:pl-24 opacity-[17%] text-center md:text-left'>
      Services Offered
    </p>
  
    {/* Carousel Container */}
    <div className="mt-8">
      {/* Scrollable Track */}
      <div 
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 px-4 md:px-24 pb-12 scrollbar-hide justify-between"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory'
        }}
      >
        {/* Image 1 */}
        <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[342px] snap-start">
          <a href="#service1" className="block relative group">
            <img
              src={image4}
              alt="Service 1"
              className="w-full h-[428px] sm:h-[459px] md:h-[523px] object-cover shadow-xl rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
  
        {/* Image 2 */}
        <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[342px] snap-start">
          <a href="#service2" className="block relative group">
            <img
              src={image5}
              alt="Service 2"
              className="w-full h-[428px] sm:h-[459px] md:h-[523px] object-cover shadow-xl rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
  
        {/* Image 3 */}
        <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[342px] snap-start">
          <a href="#service3" className="block relative group">
            <img
              src={image6}
              alt="Service 3"
              className="w-full h-[428px] sm:h-[459px] md:h-[523px] object-cover shadow-xl rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
  
      </div>
    </div>
  
    {/* Centered Button */}
    <div className="flex justify-center mt-8">
      <button className="bg-buttonColor text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium">
        Learn More
      </button>
    </div>
  </div>  
  )
}

export default Service