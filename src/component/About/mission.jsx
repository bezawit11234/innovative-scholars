import React from 'react'
import Mision from '../../assets/mm.png'
import Empower from '../../assets/em.png'
function mission() {
  return (
    <section className="bg-white h-screen flex flex-col items-start px-6 sm:px-10 md:flex-col md:text-left">
    <div className="pl-6 flex flex-row items-center text-4xl sm:text-6xl md:text-7xl font-extrabold mt-5 gap-4">
      <span className="w-auto h-auto flex items-center">
        <img src={Mision} className="h-[1.5em] w-auto" alt="Mission" />
      </span>
      <span className="text-gray-300">Statement</span>
    </div>
    <div className="flex flex-col-reverse md:flex-row items-center mt-6 gap-6 w-full">
        <div className="w-full md:w-3/5">
          <p className="text-xl md:text-2xl p-5 md:leading-normal md:font-semibold">At Innovative Scholars, our mission is to ensure that every student, regardless of background or learning challenges, has the support they need to succeed academically and beyond. We are committed to providing tutoring, advocacy, and innovative learning solutions to help students reach their full potential.</p>
        </div>
        <div className="w-full md:w-2/5 flex justify-center h-full">
          <img src={Empower} className="h-60 w-auto md:h-full" alt="Supporting Image" />
        </div>
      </div>
  </section>
  )
}

export default mission
