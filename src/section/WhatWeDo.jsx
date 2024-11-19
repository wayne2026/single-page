import React from 'react'

export default function WhatWeDo() {
  return (
    <div className='h-[1000px] relative '>
      <div className='bg-[#9790e4] tilted-bottom-part h-[550px] '></div>
      <div className='flex-col flex items-center'>
        <div className='md:mt-36 md:mb-20 w-[85%] mx-auto absolute -top-20 z-20 pt-36'>
          <h1 className='text-3xl md:text-6xl pb-16 font-semibold'>What We Do </h1>
          <div className='flex max-sm:flex-col justify-center mx-auto gap-5 '>
            <div className='flex flex-col w-1/3 pt-20 p-6 md:border-[4px] rounded-xl shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.3)] md:border-red-500 border-dotted bg-white '>
              <h1 className='text-3xl font-bold pb-8 '>Develop User Friendly Platforms</h1>
              <p className='text-xl pb-10'>We create intuitive platforms that address everyday challenges, making life easier and more efficient. Our solutions are designed to offer practical benefits and improve daily routines.</p>
            </div>
            <div className='flex flex-col w-1/3 p-6 pt-20 md:border-[4px] rounded-xl md:border-red-500 border-dotted shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.3)] bg-white'>
              <h1 className='text-3xl font-bold pb-8 '>Create Job <br className='md:hidden' /> Opportunities</h1>
              <p className='text-xl pb-10'>A core objective is to generate employment through the platforms we develop. By providing tools that help individuals and businesses operate more efficiently, we open doors to financial independence and long-term growth.</p>
            </div>
            <div className='flex flex-col w-1/3 pt-20  p-6 md:border-[4px] rounded-xl md:border-red-500 border-dotted shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.3)] bg-white'>
              <h1 className='text-3xl font-bold pb-8 pr-10 xl:text-nowrap'>Promote Environmental <br /> Sustainability</h1>
              <p className='text-xl pb-10'>We design eco-friendly solutions that encourage sustainable living practices, contributing to environmental conservation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
