import React from 'react'

export default function AboutUs() {
    return (
        <div className=' flex flex-col justify-between w-[85%] mx-auto mb-24' id='about-us'>
            <h1 className='md:text-6xl text-3xl font-semibold pb-10'>
                ABOUT US
            </h1>
            <div className='flex items-center gap-20 '>
                <p className='md:text-[1.6rem] text-lg w-[55%]'>
                    Founded on September 5, 2024, Evool Foundation is the first NGO in India to harness the power of technology for social good. We believe in the transformative potential of technology to drive positive change and improve lives. Our commitment is to use technology selflessly for the benefit of humanity and the planet.
                </p>
                <img src="about_us_final.png" alt="" width={500} />
            </div>
        </div>
    )
}
