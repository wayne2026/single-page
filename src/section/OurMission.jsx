import React from 'react'

export default function OurMission() {
  return (
    <div className=' pb-48 pt-20 flex flex-col w-[85%] mx-auto' id='mission'>
      <h1 className='text-3xl md:text-6xl pb-10 font-semibold'>OUR MISSION</h1>
      <div className='flex items-center gap-10'>
        <p className='text-lg md:text-2xl w-[60%]'>
          Our mission is to simplify lives, generate employment, and foster environmental sustainability through innovative technological solutions. We strive to meet the needs of our community and the environment, ensuring that technology acts as a force for positive change and sustainable development.
        </p>
        <img src="our_mission_hd.png" alt="" width={600} className='rounded-2xl' />
      </div>
    </div>
  )
}
