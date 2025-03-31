import React from "react";
import H1 from '../../assets/gg.png'

function hero() {
  return (
    <div className="relative w-full lg:h-[370px]  flex justify-center items-center bg-[#EBF5F3] mt-16 ">
       <div className="absolute bottom-0 left-0 w-full  h-[250px] bg-gray-900"></div>
      <div className="relative w-full h-screen flex justify-center items-center  md:mt-40 ">
      <img
        src={H1}
        alt="Full Background"
        className="absolute inset-0 lg:w-70 lg:h-70 lg:object-cover top-7"
      />
      </div>
     
      <div className="absolute lg:top-80 left-1/2 transform -translate-x-1/2 bg-green-500 px-16 md:px-16 py-3 rounded-full text-black font-semibold text-center">
        Meet the Dedicated Minds Behind Innovative Scholars
      
    </div>
    </div>
  );
}

export default hero;