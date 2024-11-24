import React from 'react'

export default function OurVision() {
  return (
    <div className='bg-gray-100 mb-36'>
      <div className='pb-36 w-[85%] mx-auto pt-20' id='vision'>
        <h1 className='text-3xl md:text-6xl pb-10 font-semibold'>OUR VISION</h1>
        <div className='flex items-center gap-14'>
          <img src="vision_bg.png" alt="" width={500} />
          <p className='text-lg md:text-2xl lg:w-[60%] text-pretty'>
            We envision a world where technology is a catalyst for sustainable development, enhancing the quality of life for all. Our goal is to lead the way in using innovative technological solutions to create a fairer, more sustainable future. We aim to ensure that technology bridges gap, empowers communities, and leaves no one behind. By fostering a culture of continuous improvement and collaboration, we strive to make a lasting positive impact on society and the environment.
          </p>
        </div>
      </div>
    </div>
  )
}
