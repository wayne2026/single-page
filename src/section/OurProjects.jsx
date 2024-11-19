import React from 'react'

export default function OurProjects() {
  return (
    <div className=' pb-36 w-[85%] mx-auto pt-20' id='project'>
      <h1 className='text-lg font-semibold md:text-6xl pb-10'>OUR PROJECTS</h1>
      <div className='flex gap-20 items-center'>
        <p className='text-lg xl:text-2xl w-[60%] text-justify '>
          Voolata is an innovative QR code generator web platform designed to create detailed medical cards for humans, as well as identity cards for plants and animals. This platform allows users to store and access vital health information for themselves and comprehensive details for their pets and plants, ensuring that all essential information is always at hand.
          With Voolata, you can create medical profiles that include vaccination records, medical history, and emergency contacts for humans. Additionally, it allows you to generate identity cards for plants and animals, documenting their species, care instructions, and other important details. This holistic approach not only ensures better care and management but also promotes environmental sustainability by reducing the need for paper records and encouraging eco-friendly practices.
        </p>
        <img src="project_final.png" alt="" width={500} className=''/>
      </div>
    </div>
  )
}
