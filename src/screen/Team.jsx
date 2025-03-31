import React from 'react'
import Hero from '../component/Team/hero'
import Team1 from '../component/Team/team1'
import Footer from '../layout/footer'
import Ready from '../Reuseable/ready'
function Team() {
  return (
    <div className="relative overflow-hidden">
    <Hero/>
    <Team1/>
    <Ready className='bg-[#EBF5F3]
             text-black'/>
     <Footer/>
    </div>
  )
}

export default Team
