import React from 'react'

export default function AboutUs() {
    return (
        // <div className=' flex flex-col justify-between w-[85%] mx-auto mb-24' id='about-us'>
        //     <h1 className='md:text-6xl text-3xl font-semibold '>
        //         ABOUT US
        //     </h1>
        //     <div className='flex items-center gap-20 '>
        //         <img src="about_us_final.png" alt="" className='w-[45rem]' />
        //         <p className='md:text-[1.6rem] text-lg text-justify'>
        //             Founded on September 5, 2024, Evool Foundation is the first NGO in India to harness the power of technology for social good. We believe in the transformative potential of technology to drive positive change and improve lives. Our commitment is to use technology selflessly for the benefit of humanity and the planet.
        //         </p>
        //     </div>
        // </div>
        <div className='flex flex-col justify-between w-[85%] mx-auto mb-24' id='about-us'>
            <h1 className='text-5xl sm:text-6xl max-sm:text-center font-semibold'>
                ABOUT US
            </h1>
            <div className='flex flex-col lg:flex-row items-center gap-10 md:gap-20'>
                <img src="about_us_final.png" alt="" className='sm:w-full lg:w-[40rem] xl:w-[45rem] rounded-lg' />
                <p className='text-lg md:text-[1.6rem] text-justify mt-5 md:mt-0'>
                    Founded on September 5, 2024, Evool Foundation is the first NGO in India to harness the power of technology for social good. We believe in the transformative potential of technology to drive positive change and improve lives. Our commitment is to use technology selflessly for the benefit of humanity and the planet.
                </p>
            </div>
        </div>

    )
}
