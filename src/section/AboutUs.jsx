import React from 'react'

export default function AboutUs() {
    return (
        <div className=' flex justify-between gap-48 ' id='about-us'>
            <div className='w-[65%]'>
                <h1 className='md:text-6xl text-3xl pb-10 font-semibold'>
                    About Us
                </h1>
                <p className='md:text-2xl text-lg'>
                    Founded on September 5, 2024, Evool Foundation is the first NGO in India to harness the power of technology for social good. We believe in the transformative potential of technology to drive positive change and improve lives. Our commitment is to use technology selflessly for the benefit of humanity and the planet.
                </p>
            </div>
            <div className='w-[45%]'>
                <img src="./about.webp" alt=""  width={400} />
            </div>
        </div>
    )
}
