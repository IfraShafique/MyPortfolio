import React from 'react'
import Button from './Button'

export default function About() {
  return (
    <section className="about-container py-16 h-screen flex items-center" id="about">
    <div className=" mx-auto flex max-sm:flex-col justify-between items-center">
      <div className="sm:w-[40%] w-[70%]" >
        <img src="/assets/Images/6.jpg" alt="About" className="rounded-lg" />
      </div>
      <div className="sm:w-[60%] w-[90%] max-sm:mt-10 text-white">
        <div className="about-text">
          <h2 className="sm:text-5xl text-3xl font-bold mb-2">About Us</h2>
          <h3 className="text-lg mb-4 text-purple-700 font-semibold">Software Engineer & Graphic Designer</h3>
          <p className="md:text-lg text-sm mb-4">I am a Software Engineer and Graphic Designer. I am passionate about my work. I have learned multiple programming languages such as Python, Java(OOP), and also HTML CSS. I also have a command of Adobe Illustrator & Photoshop.</p>
         <Button label={'Read More'} link={'#'} />
        </div>
      </div>
    </div>
  </section>
  )
}
