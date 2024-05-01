'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='relative bg-cover bg-center h-screen lg:px-10 px-5 lg:pt-5 pt-2' style={{ backgroundImage: "url('./assets/Images/7.jpg')" }}>
      <div className={`flex justify-between items-center ${
          showMenu
            ? "absolute top-0 right-0 w-full h-[90vh] flex justify-end items-end bg-black opacity-90 transition-all duration-500 transform -translate-x-0 "
            : ""
        }`}>
        <div className={`flex items-center ${showMenu ? "hidden" : ""}`}>
          <img src="/assets/Images/IS logo.png" alt="Logo" className="lg:h-24 sm:h-16 h-10" />
          <div className="text-white lg:text-2xl sm:text-lg font-bold">Portfo<span className="text-purple-700">lio</span></div>
        </div>
        {/* Hamburger Icon */}
        <div className="block md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={showMenu ? faTimes : faBars}
            className={`w-6 h-6 text-white cursor-pointer ${showMenu ? "absolute top-5 right-5 text-purple-700 opacity-100" : ""}`}
          />
        </div>
        {/* Navbar */}
        <nav className={`md:flex md:items-center ${showMenu ? 'block w-full text-purple-700 ' : 'hidden'}`}>
          <ul className="flex max-md:flex-col  md:space-x-8 font-semibold max-md:text-center md:text-white md:text-base sm:text-sm text-sx">
            <li className='hover:text-purple-700 max-lg:mb-2 max-lg:hover:text-white hover:duration-500'><a href="#">Home</a></li>
            <li className='hover:text-purple-700 max-lg:mb-2 max-lg:hover:text-white hover:duration-500'><a href="#about">About Us</a></li>
            <li className='hover:text-purple-700 max-lg:mb-2 max-lg:hover:text-white hover:duration-500'><a href="#skills">Skills</a></li>
            <li className='hover:text-purple-700 max-lg:mb-2 max-lg:hover:text-white hover:duration-500'><a href="#services">Services</a></li>
            <li className='hover:text-purple-700 max-lg:mb-2 max-lg:hover:text-white hover:duration-500'><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>

      {/* Intro */}
      <section className="flex items-center w-full lg:h-[80vh] h-screen">
        <div className="text-white">
          <h5 className='text-lg mb-2'>My name is</h5>
          <h2 className="sm:text-5xl text-3xl font-bold mb-2">Ifra <span className="text-purple-700">Shafique</span></h2>
          <h3 className="sm:text-lg font-bold">I am Software Engineer & Mern Stack Developer</h3>
          <Button label={'My Resume'} link={'#'} />
        </div>
      </section>
    </div>
  );
}
