import React from 'react'
import Books from '../../assets/book.png'
function hero() {
  return (
    <section className="bg-[#0C3245] text-white h-screen flex flex-col-reverse items-center justify-center text-center px-6 md:flex-row md:text-left">
    <div className="max-w-md md:w-1/2 " >
      <h1 className="text-3xl md:text-4xl font-semibold p-7 md:leading-normal">At Innovative Scholars, we believe every student deserves support needed to succeed.</h1>
    </div>
    <div className="md:w-1/2 flex justify-center mt-10">
       <img 
       src={Books}
       alt='eduacation book'
       className="w-full h-full object-cover"/> 
    </div>
  </section>
  )
}

export default hero