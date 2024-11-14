import React from 'react'

export default function WhatWeDo() {
  return (
    <div className='md:mt-36 md:mb-20'>
      <h1 className='text-3xl md:text-6xl pb-16 font-semibold'>What We Do </h1>
      <div className='flex  max-sm:flex-col h-fit justify-center mx-auto'>
        <div className='flex flex-col w-1/3 pt-20 md:border-r-[2px] md:border-r-green-400 '>
          <h1 className='text-4xl font-bold pb-8 '>Develop User-Friendly Platforms</h1>
          <p className='text-xl pb-28'>We create intuitive platforms that address everyday challenges, making life easier and more efficient. Our solutions are designed to offer practical benefits and improve daily routines.</p>
        </div>
        <div className='flex flex-col w-1/3 pl-6 pt-20  md:border-r-[2px] md:border-r-green-400'>
          <h1 className='text-4xl font-bold pb-8 '>Create Job Opportunities</h1>
          <p className='text-xl pb-28'>A core objective is to generate employment through the platforms we develop. By providing tools that help individuals and businesses operate more efficiently, we open doors to financial independence and long-term growth.</p>
        </div>
        <div className='flex flex-col w-1/3 pt-20 pl-6  '>
          <h1 className='text-4xl font-bold pb-8 text-nowrap'>Promote Environmental <br /> Sustainability</h1>
          <p className='text-xl pb-28'>We design eco-friendly solutions that encourage sustainable living practices, contributing to environmental conservation.</p>
        </div>
      </div>
    </div>
  )
}
