import React from 'react'

export default function Skills() {
  return (
    <section className="skills py-16 text-white" id="skills">
    <div className="">
      <h2 className="sm:text-5xl text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:gap-8 gap-3 mx-auto xl:w-[40%] lg:w-[50%] sm:w-[80%] w-[90%]">
        <div className="">
          <h4>Python</h4>
          <div className="percent h-2 bg-gray-300 mt-2">
            <div className="h-full bg-purple-700" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="box">
          <h4>Java (OOP)</h4>
          <div className="percent h-2 bg-gray-300 mt-2">
            <div className="h-full bg-purple-700" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="box">
          <h4>Html</h4>
          <div className="percent h-2 bg-gray-300 mt-2">
            <div className="h-full bg-purple-700" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="box">
          <h4>CSS</h4>
          <div className="percent h-2 bg-gray-300 mt-2">
            <div className="h-full bg-purple-700" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="box">
          <h4>Photoshop</h4>
          <div className="percent h-2 bg-gray-300 mt-2">
            <div className="h-full bg-purple-700" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="box">
          <h4>Illustrator</h4>
          <div className="percent h-2 bg-gray-300 mt-2">
            <div className="h-full bg-purple-700" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}
