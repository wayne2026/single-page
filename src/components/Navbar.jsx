import React from 'react'
import { useState, useEffect } from 'react'
export default function Navbar() {
  const [bgColor, setBgColor] = useState('bg-[#def8f9]')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor("bg-[#F8F4EE]");
      } else {
        setBgColor("bg-[#def8f9]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//border-b-[2px] border-red-500 
  return (
    <div className={` w-full   h-24 fixed ${bgColor} text-xl z-50 font-medium hover:bg-[#F8F4EE]  flex justify-evenly items-center`}>
      <div className=''>
        <a href="/">
          <h1 className='text-center'>Evool </h1>
        </a>
      </div>
      <div className='flex gap-10 '>
        <a href="#mission">
          <h1>Our Mission</h1>
        </a>
        <a href="#vision">
          <h1>Our Vision</h1>
        </a>
        <a href="#project">
          <h1>Our Project</h1>
        </a>
        <a href="#about-us">
          <h1>About Us</h1>
        </a>
        <a href="#involved">
          <h1>Get Involved</h1>
        </a>
      </div>
      <div className='border-[3px] border-black p-2 w-32'>
        <a href="/">
          <h1 className='text-center'>Evool </h1>
        </a>
      </div>
    </div>
  )
}
