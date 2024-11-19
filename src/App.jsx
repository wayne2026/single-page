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
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='mx-auto overflow-hidden'>
      <SideBar />
      <Navbar />
      <div className=' relative flex flex-col mx-auto mt-24'>
        <div className='bg-[#9790e4]'>
        <Hero />
        <AboutUs />
        </div>
        <WhatWeDo />
        <OurMission />
        <OurVision />
        <OurProjects />
        <GetInvolved />
        <NeedSupport />
      </div>
      <Footer />
    </div>
  )
}

export default App
