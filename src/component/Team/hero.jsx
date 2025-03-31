import React from "react";
import H1 from '../../assets/gg.png';

function Hero() {
  return (
    <div className="relative w-full h-[370px] flex justify-center items-center bg-[#EBF5F3] md:mt-16">
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gray-900"></div>

      {/* Main container for the image */}
      <div className="relative w-full h-full flex justify-center items-center md:mt-40">
        <img
          src={H1}
          alt="Full Background"
          className="absolute inset-0 w-full h-full object-cover top-7"
        />
      </div>

      {/* Button */}
      <div className="absolute top-[calc(100%-100px)] left-1/2 transform -translate-x-1/2 bg-green-500 px-8 md:px-16 py-3 rounded-full text-black font-semibold text-center">
        Meet the Dedicated Minds Behind Innovative Scholars
      </div>
    </div>
  );
}

export default Hero;
