import React from 'react'
import { useState } from 'react'
export default function SideBar() {
  const [side, setSide] = useState(false)
  return (
    <div className=' z-50 w-14 h-full fixed right-0 mx-auto flex flex-col items-center justify-center '>
      <div className='max-sm:hidden'>
        {side ? (
          <div
            className="-rotate-90 w-64 h-[500px] transition-all duration-700 ease-in-out transform flex flex-col justify-center items-center bg-teal-300 opacity-90"
          >
            <button onClick={() => setSide(false)}>
              <img src="top-arrow.svg" alt="" className="w-10 rotate-180 transition-transform duration-700"
              />
            </button>
            {side && (
              <div
                className="w-48 h-[440px] overflow-hidden opacity-100 transition-opacity duration-1000 ease-in-out"
              >
                <p className="rotate-90 mt-10 -ml-3 w-52">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus, perspiciatis.
                  <a href="https://voolata.com" target="_blank" rel="noopener noreferrer">
                    <h1 className="pt-5 font-outfit text-xl text-red-500">
                      Take Me There
                    </h1>
                  </a>
                </p>
              </div>
            )}
          </div>
        )
          : (
            <div className='-rotate-90 w-64 h-14 transition-all duration-700 ease-in-out transform  flex justify-center items-center bg-teal-300 opacity-90'>
              <button onClick={() => setSide(true)}>
                <img src="top-arrow.svg" alt="" className='w-10 transition-transform duration-700' />
              </button>
            </div>

          )}
      </div>
    </div>
  )
}
