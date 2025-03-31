import React from 'react'
import Hero from '../component/About/hero'
import Mission from'../component/About/mission'
import Story from '../component/About/ourstory'
import Drive from '../component/About/drive'
import Ready from '../Reuseable/ready'
import Footer from '../layout/footer'
function About() {
  return (
    <div className="relative overflow-hidden">
      <Hero/>
      <Mission/>
      <Story/>
      <Drive/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default About
