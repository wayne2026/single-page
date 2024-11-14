import React from 'react'
import Navbar from './components/Navbar'
import AboutUs from './section/AboutUs'
import WhatWeDo from './section/WhatWeDo'
import OurMission from './section/OurMission'
import OurVision from './section/OurVision'
import OurProjects from './section/OurProjects'
import GetInvolved from './section/GetInvolved'
import NeedSupport from './section/NeedSupport'
import Hero from './section/Hero'
import Footer from './components/Footer'
function App() {
  return (
  <div className='mx-auto bg-[#def8f9] overflow-hidden'>
      <Navbar />
      <div className='w-[90%] flex flex-col gap-y-12 mx-auto  pt-20'>
        <Hero/>
        <AboutUs />
        <WhatWeDo/>
        <OurMission/>
        <OurVision/>
        <OurProjects/>
        <GetInvolved/>
        <NeedSupport/>
      </div>
        <Footer/>   
    </div>
  )
}

export default App
