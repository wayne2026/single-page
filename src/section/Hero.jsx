import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className="relative h-auto w-full bg-[#222831] min-h-[400px] overflow-hidden px-5 mt-10 lg:px-20">
        
        <div className="absolute top-0 right-0 h-[30%] w-[30%] bg-gradient-to-tr from-emerald-200 to-emerald-500 blur-[130px]">
        </div>
        <div className="absolute bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-emerald-200 to-emerald-500 blur-[130px]">
        </div>
        <div className="p-5  grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-5 lg:py-10">
          <div>
            <h1 className="text-3xl lg:text-4xl @6xl:text-5xl font-bold text-white ">We are <span className="text-pink-500">always</span> there</h1>
            <h1 className="text-3xl lg:text-4xl @6xl:text-5xl font-bold text-white mt-4 ">for your need</h1>
          </div>
          <div>
            <p className=" text-gray-300 ">We are a remote design agency based in Montreal working with clients around the world. As passionate designers we love building products that are easy to use accessible engaging and delightful.</p>
            <button className=" text-pink-500 mt-4 uppercase ">/   Contact us</button>
          </div>
        </div>
      </section>
      <img src="https://utfs.io/f/df007e37-3b42-4ada-a272-8d5e63807d6b-k6t0zq.jpg" alt="" className="w-[80%] h-auto mx-auto -translate-y-32" />

    </div>
  )
}
