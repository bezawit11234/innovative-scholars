import React from 'react'
import Company from '../../assets/com.png'
function ourstory() {
   return (
    <section className="bg-[#EBEDF5] min-h-screen flex flex-col items-start px-6 sm:px-10 md:flex-col md:text-left">
    <div className="pl-6 flex flex-row items-center text-4xl sm:text-6xl md:text-7xl font-extrabold mt-5 gap-4">
      <span className="text-gray-300">Our</span>
      <span className="text-gray-300">Story</span>
    </div>
    <div className="flex flex-col md:flex-row items-center mt-6 gap-6 w-full"> 
      <div className="w-full md:w-2/5 flex justify-center h-auto">
        <img src={Company} className="h-80 w-auto md:h-full" alt="Supporting Image" />
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        <p className="text-xl md:text-2xl p-5">
          Innovative Scholars was founded with a simple yet powerful goal: to bridge the academic achievement gap and provide students with the tools they need to thrive. Recognizing the challenges many students face in traditional school settings, we partnered with educators, parents, and policymakers to create a holistic approach to learning.
        </p>
        <p className="text-xl md:text-2xl p-5 sm:whitespace-normal sm:overflow-hidden">
          Since our founding, we have worked with numerous school districts, parents, and students, helping struggling learners turn their academic performance around. Through personalized tutoring, advocacy, and educational innovation, we continue to make a meaningful impact in students' lives.
        </p>
      </div>
    </div>
  </section>  
   )
 }
export default ourstory
