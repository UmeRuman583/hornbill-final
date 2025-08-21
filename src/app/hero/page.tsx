'use client'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden mt-28"> 
      {/* Background Image with reduced height */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/last.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start w-full h-[85vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-[85vh]">
            
            {/* Left Content */}
            <div className="flex flex-col justify-end space-y-6  ml-10"> 
              {/* moved upward with -mt-10 */}
              <div className="space-y-4 mt-28">
               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide leading-snug">
  Better{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
    Healthcare <br />
  </span>{" "}
  you can get
</h1>

                
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
<p className="text-[10px] sm:text-xs md:text-sm leading-snug text-gray-200 max-w-md font-light">
  With years of experience in the medical equipment industry, our team possesses 
  the knowledge and expertise to provide tailored solutions that meet the specific 
  needs of healthcare providers.
</p>


              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-transparent">
                  Learn More
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
