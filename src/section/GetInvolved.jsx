import React from 'react'

export default function GetInvolved() {
  return (
    <div className='flex flex-col gap-10' id='involved'>
      <div>
        <h1 className='text-3xl md:text-6xl font-semibold pb-10 pt-20'>GET INVOLVED</h1>
        <p className='text-lg md:text-2xl'>
          At Evool Foundation, we believe that meaningful change happens when
          people come together. We invite individuals, organizations, and
          businesses who share our vision of using technology to address
          human and environmental challenges to join us in our mission.
        </p>
        <h1 className='text-2xl md:text-4xl pt-10 font-medium md:pb-10'>WAYS TO GET INVOLVED</h1>
      </div>
      <div className='flex max-sm:flex-col gap-8 p-3'>
        <div className='flex flex-col md:w-1/3 max-sm:h-80 relative gap-10 rounded-2xl shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.1)] bg-white border-dotted border-red-400 border-[4px] text-justify p-10'>
          <h1 className='md:text-3xl font-semibold'>Partner with Us</h1>
          <p className='font-medium md:text-base text-sm'>Collaborate with us to develop new platforms that address critical social and environmental needs.</p>
          <img src="splatter.svg" alt="" width={270} className='absolute md:left-36 md:top-52 max-sm:w-36 -top-10 left-52'/>
        </div>
        <div className="flex flex-col md:w-1/3 gap-10 max-sm:h-80 rounded-2xl shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.1)] bg-white text-justify p-10 border-dotted border-red-400 border-[4px] bg-top bg-[url('/chaos.svg')] bg-[length:150%_200%]">
          <h1 className='md:text-3xl font-semibold '>Volunteer Your Time and Expertise</h1>
          <p className='font-medium md:text-base text-sm'>If you’re passionate about technology, sustainability, or community development, we’d love to have your support. Whether through web development, outreach, software engineering, UI/UX design, digital marketing, or product design/management, your contribution can make a difference.</p>
        </div>
        <div className="flex flex-col md:w-1/3 gap-10 rounded-2xl shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.1)] bg-white border-dotted border-red-400 border-[4px] text-justify p-10 bg-[url('/leaves.svg')]">
          <h1 className='md:text-3xl'>Become a Supporter</h1>
          <p className=''>Whether through financial contributions or spreading the word, your support helps us continue developing platforms that improve lives and care for the planet.</p>
        </div>
      </div>
      <h2 className='text-2xl md:text-4xl'>
        SUPPORT EVOOL FOUNDATION
      </h2>
      <p className='text-lg md:text-2xl'>
        At Evool Foundation, we are dedicated to harnessing the power of technology for social good. Your support can help us continue our mission to simplify lives, generate employment, and promote environmental sustainability. By donating to Evool Foundation, you are contributing to a brighter, more sustainable future for all.
      </p>
    </div>
  )
}
