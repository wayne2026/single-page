// import React from 'react'
// import { useState, useEffect } from 'react'
// export default function Navbar() {
//   const [bgColor, setBgColor] = useState('bg-[#def8f9]')
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setBgColor("bg-[#F8F4EE]");
//       } else {
//         setBgColor("bg-[#def8f9]");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
// //border-b-[2px] border-red-500 
//   return (
//     <div className={` w-full font-outfit  h-24 fixed ${bgColor} text-xl z-[100] font-medium hover:bg-[#F8F4EE]  flex justify-evenly items-center `}>
//       <div className=''>
//         <a href="/">
//           {/* <h1 className='text-center'>Evool </h1> */}
//           <img src="/evool_t.png" alt="" className='w-28'/>
//         </a>
//       </div>
//       <div className='md:flex hidden gap-10 '>
//         <a href="#mission">
//           <h1>Our Mission</h1>
//         </a>
//         <a href="#vision">
//           <h1>Our Vision</h1>
//         </a>
//         <a href="#project">
//           <h1>Our Project</h1>
//         </a>
//         <a href="#about-us">
//           <h1>About Us</h1>
//         </a>
//         <a href="#involved">
//           <h1>Get Involved</h1>
//         </a>
//       </div>
//       <div className='border-[3px] hidden md:block border-black p-2 w-32'>
//         <a href="/">
//           <h1 className='text-center'>Evool </h1>
//         </a>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [bgColor, setBgColor] = useState('bg-[#def8f9]');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor('bg-[#F8F4EE]');
      } else {
        setBgColor('bg-[#def8f9]');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full font-outfit sm:h-24 h-20 fixed ${bgColor} text-xl z-[100] font-medium hover:bg-[#F8F4EE] flex md:justify-evenly justify-between items-center p-4 md:px-8 transition-all duration-500 ease-in-out`}
    >
      
      <div className="flex items-center text-center">
        <a href="/">
          <img src="/evool_t.png" alt="" className='sm:w-28 w-24 ' />
        </a>
      </div>


      <div className="hidden md:flex max-lg:text-sm gap-10 transition-all duration-300 ease-in-out">
        <a href="#mission"><h1>Our Mission</h1></a>
        <a href="#vision"><h1>Our Vision</h1></a>
        <a href="#project"><h1>Our Project</h1></a>
        <a href="#about-us"><h1>About Us</h1></a>
        <a href="#involved"><h1>Get Involved</h1></a>
      </div>


      <div
        className="md:hidden flex items-center transition-all duration-300 ease-in-out"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ?
          <>
            <img src="/close.png" alt="" className={`w-4 mr-2`} />
          </>
          :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 ease-in-out`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        }
      </div>

      <button className={`hidden md:flex items-center justify-center border-[3px] border-black lg:p-2 p-1 lg:w-32  transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>

        <a href="/">
          <h1 className="text-center max-lg:text-lg">Donate</h1>
        </a>
      </button>


      {isMenuOpen &&
        <div
          className={`md:hidden absolute z-10 top-20 left-0 w-full bg-[#def8f9] text-xl font-medium transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : ' opacity-0 overflow-hidden'}`}
        >
          <div className="flex flex-col -z-10 items-center gap-4 py-4 pb-20 pt-5">
            <hr className='w-[40%] border-t-2 border-purple-500' />
            <a href="#mission" className="px-4 py-2">Our Mission</a>
            <hr className='w-[40%] border-t-2 border-purple-500' />
            <a href="#vision" className="px-4 py-2">Our Vision</a>
            <hr className='w-[40%] border-t-2 border-purple-500' />
            <a href="#project" className="px-4 py-2">Our Project</a>
            <hr className='w-[40%] border-t-2 border-purple-500' />
            <a href="#about-us" className="px-4 py-2">About Us</a>
            <hr className='w-[40%] border-t-2 border-purple-500' />
            <a href="#involved" className="px-4 py-2">Get Involved</a>
            <hr className='w-[40%] border-t-2 border-purple-500' />

          </div>
        </div>
      }
    </div>
  );
}
