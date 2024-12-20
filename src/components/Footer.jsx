import React from 'react'
import { Link } from 'react-router-dom';
export const menuItems = [
  { label: "Our Mission", path: "/our-mission" },
  { label: "Our Vision", path: "/our-vision" },
  { label: "Our Project", path: "/our-project" },
  { label: "About Us", path: "/about-us" },
  { label: "Get Involved", path: "/get-involved" }
];
export default function Footer() {
  return (

    <div className="relative mt-56 bg-blue-300 ">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-blue-300"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2 mx-auto max-md:place-items-center">
            <a
              href="/"
              aria-label="Go home"
              title="EVOOL FOUNDATION"
              className="inline-flex items-center"
            >
              <img src="/evool_t.png" alt="" className='w-28 ' />
              <span className=" text-[1.3rem] text-nowrap font-bold tracking-wide text-gray-800 uppercase">
                EVOOL FOUNDATION
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm max-md:text-center text-deep-purple-50">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>

            </div>
          </div>
          <div className='flex md:flex-row flex-col sm:items-center sm:gap-24 sm:ml-20 sm:pt-10'>
            <div className="flex flex-col text-center md:text-left items-center md:mt-0 ">
              <h2 className="text-black text-xl font-medium lg:pr-14">Company</h2>
              <div className="text-black mt-4 flex flex-col gap-2 w-36">
                {menuItems.map((me, index) => (
                  <Link to={me.path}><h1>{me.label}</h1></Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left mt-10 md:mt-0">
              <h2 className="text-black text-xl font-medium">Links</h2>
              <ul className="text-black mt-4 space-y-2">
                <li>F.A.Q</li>
                <li>Testimonials</li>
                <li>Recent Work</li>
                <li>Features</li>
              </ul>
            </div>

            <div className="flex flex-col text-center md:text-left mt-10 md:mt-0">
              <h2 className="text-black text-xl font-medium">Contact</h2>
              <ul className="text-black mt-4 space-y-2">
                <li>+91 91368 95794</li>
                <li className="text-sm">contactus@evoolfoundation.org</li>
                <li className="text-sm">
                  105, P-17, Omkar CHS Ltd, Noopur Nagar Mataji Mandir, Mira Road, Thane, Thane- 401107
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t-[3px] border-deep-purple-accent-200 sm:flex-row">

          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
