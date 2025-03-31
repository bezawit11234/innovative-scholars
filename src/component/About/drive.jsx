import React from 'react'

function drive() {
  return (
    <section className="bg-white h-screen flex flex-col items-start px-6 sm:px-10 md:flex-col md:text-left">
    <div className="pl-6 flex flex-row items-center text-4xl sm:text-6xl md:text-7xl font-extrabold mt-5 gap-4">
    <span className="text-gray-300">What </span>
      <span className="text-gray-300">Drive</span>
      <span className="text-gray-300">Us</span>
    </div>
      <p className='mt-3 sm:text-xl md:text-xl text-gray-800'>At Innovative Scholars, we believe that every student deserves access to high-quality education and support. Our <br/>core values shape everything we do:</p>
      <div className="mt-8 p-6 md:p-20 bg-[#EBF5F3] rounded-lg shadow-md max-w-5xl mx-auto grid gap-6 md:gap-16  grid-cols-1 md:grid-cols-3">
        <div className="border-2 border-green-400 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800">Empowerment</h3>
          <p className="text-gray-600">Giving students the confidence and skills to succeed.</p>
        </div>
        <div className="border-2 border-green-400 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800">Innovation</h3>
          <p className="text-gray-600">Using creative, research-based approaches to improve learning.</p>
        </div>
        <div className="border-2 border-green-400 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800">Inclusivity</h3>
          <p className="text-gray-600">Supporting students of all backgrounds and abilities.</p>
        </div>
        <div className="border-2 border-green-400 p-4 rounded-lg ">
          <h3 className="font-bold text-gray-800">Collaboration</h3>
          <p className="text-gray-600">Partnering with schools, parents, and communities.</p>
        </div>
        <div className="border-2 border-green-400 p-4 rounded-lg">
          <h3 className="font-bold text-gray-800">Commitment to Excellence</h3>
          <p className="text-gray-600">Striving for the highest standards in education.</p>
        </div>
      </div>
    </section>
  )
}

export default drive
