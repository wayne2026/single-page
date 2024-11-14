import React from 'react'

export default function NeedSupport() {
  return (
    <div  >
      <h1 className='text-3xl md:text-6xl font-semibold pb-20 pt-16'>WHY WE NEED YOUR SUPPORT </h1>
      <div className='flex items-center gap-10'>
        <div className='flex flex-col h-96 w-1/3 gap-10 border-r-green-700 border-r-2 pt-20'>
          <h1 className='text-2xl'>Research and Development</h1>
          <p>
            Innovation is at the heart of what we do. Your donations will help us invest in cutting-edge research and development to create new technological solutions that address everyday challenges and improve lives.
          </p>
        </div>
        <div className='flex flex-col h-96 w-1/3 border-r-green-700 border-r-2 gap-10 pt-20'>
          <h1 className='text-2xl'>Server and Maintenance Costs</h1>
          <p>
            To ensure our platforms run smoothly and securely, we need to cover ongoing server and maintenance expenses. Your support helps us maintain the reliability and efficiency of our services.
          </p>
        </div>
        <div className='flex flex-col h-96 w-1/3 border-r-green-700 border-r-2 gap-10 pt-20'>
          <h1 className='text-2xl'>Team Support</h1>
          <p>
            Our dedicated team of professionals works tirelessly to develop and manage our platforms. Your contributions help us attract and retain top talent, ensuring that we continue to deliver high-quality solutions.
          </p>
        </div>
      </div>
      <h1 className='text-2xl md:text-4xl pb-20 pt-16 '>HOW YOUR DONATIONS MAKE A DIFFERENCE</h1>
      <div className='flex gap-6 max-sm:flex-col '>
        <div className='relative flex flex-col w-1/3  '>
          <img src="./no-1.png" alt="" width={60} className='absolute z-10 top-'/>
          <div className='border-2 mt-8  flex flex-col gap-5 p-10 rounded-[30px] h-72 bg-[#FADBD8] shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.1)]'>
            <h1>Empowering Communities</h1>
            <p>
            By supporting our projects, you help us create user-friendly platforms that make life easier and more efficient for individuals and businesses
            </p>
          </div>
        </div>
        <div className='relative flex flex-col w-1/3 '>
          <img src="./no-2.svg" alt="" width={60} className='absolute z-10 top-'/>
          <div className='border-2 mt-8  flex flex-col gap-5 p-10 rounded-[30px] h-72 bg-[#FADBD8] shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.1)] '>
            <h1>Creating Job Opportunities</h1>
            <p>
            Your donations enable us to generate employment through the platforms we develop, fostering financial independence and long-term growth.
            </p>
          </div>
        </div>
        <div className='relative flex flex-col w-1/3 '>
          <img src="./no-3.svg" alt="" width={60} className='absolute z-10 top-'/>
          <div className='border-2 mt-8  flex flex-col gap-5 p-10 rounded-[30px] h-72 shadow-[-3px_12px_46px_-2px_rgba(0,_0,_0,_0.1)] bg-[#FADBD8]'>
            <h1>Promoting Sustainability</h1>
            <p>
            We design eco-friendly solutions that encourage sustainable living practices. Our initiatives help conserve natural resources, reduce waste, and contribute to a healthier environment overall. By promoting digital solutions, we aim to create a more sustainable future for everyone.
            </p>
          </div>
        </div>
        
      </div>
      <p className='md:text-2xl pt-20 pb-16'>
      Together, we can create a future where technology drives sustainable development and enhances the quality of life for all. Join us in our mission to make a positive impact on the world.
      </p>
      <h2 className='md:text-3xl'>Donate Now and be a part of the <span className='text-purple-500'>CHANGE!</span></h2>


    </div>
  )
}
