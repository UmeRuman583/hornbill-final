'use client'
import React, { useState, useEffect } from 'react'
import { Phone, MapPin, Menu, X } from 'lucide-react'
import Link from "next/link";

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ]

  // Reset menu state when component mounts or activeSection changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [activeSection])



  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  const handleOverlayClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="absolute top-0 z-40 w-full h-3" style={{ fontFamily: 'Georgia, serif' }}>
        {/* Topbar - keeping white background */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            {/* Mobile Header */}
            <div className="flex md:hidden items-center justify-between h-14 sm:h-16 w-full px-4">
              <div className="flex-shrink-0 mr-6">
                <img src="/logo.webp" alt="Company Logo" className="w-28 h-5 sm:w-32 sm:h-6 object-contain" />
              </div>
              <button 
                onClick={toggleMenu} 
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 transition-colors duration-200" 
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between h-20 lg:h-24 xl:h-28 border-b border-gray-100">
              <div className="flex-shrink-0">
                <img src="/logo.webp" alt="Company Logo" className="w-40 h-10 lg:w-48 lg:h-12 xl:w-56 xl:h-14 object-contain" />
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-6 lg:space-x-6 xl:space-x-10 px-17">
                {/* Phone */}
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 bg-transparent rounded-full flex items-center justify-center border-[2px] border-blue-500">
                    <svg className="w-4 h-4 lg:w-5 lg:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      <path d="M15.5 3.5a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M15.5 1a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs lg:text-sm text-black tracking-wide">Call Us</span>
                    <span className="text-xs lg:text-sm xl:text-base font-bold text-blue-500" style={{ fontFamily: 'Mozilla Text, sans-serif' }}>
                      0569123-9
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 bg-transparent rounded-full flex items-center justify-center border-[2px] border-blue-500">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs lg:text-sm text-black">Visit Us :</span>
                    <span className="text-xs lg:text-sm xl:text-base font-bold text-blue-500" style={{ fontFamily: 'Mozilla Text, sans-serif' }}>
                      House no 2, Main Service <br className="hidden lg:block" /> road, G 16/9, Islamabad
                    </span>
                  </div>
                </div>

                {/* Contact Button */}
                <button className="bg-yellow-500 hover:bg-blue-800 hover:text-white text-black px-3 py-2 lg:px-5 lg:py-2.5 xl:px-7 xl:py-3 text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md -mr-8">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Navbar that shows section background */}
        <div className="hidden md:block relative bg-transparent">
          {/* Semi-transparent overlay for text readability */}
          <div className="absolute inset-0 bg-blue-500 bg-opacity-30 backdrop-blur-sm ml-20 mr-20 focus:outline-none"></div>
          
          <div className="relative z-10 flex justify-center py-4 px-4">
            <div className="flex space-x-8 lg:space-x-16">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-semibold transition-all duration-300 text-sm lg:text-base px-4 py-2 rounded-lg ${
                    activeSection === item.id
                      ? 'text-yellow-400 '
                      : 'text-white hover:text-yellow-300  hover:bg-opacity-10 backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed inset-0 z-50 md:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`} onClick={toggleMenu} />
        <div className={`absolute right-0 top-0 h-full w-72 sm:w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <div className="flex-shrink-0">
              <img src="/logo.webp" alt="Company Logo" className="w-28 h-7 sm:w-32 sm:h-8 object-contain" />
            </div>
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 p-1 transition-colors duration-200" aria-label="Close menu">
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="py-4 sm:py-6 flex-1">
           {navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => handleNavClick(item.id)}
    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 border-l-4 ${
      activeSection === item.id
        ? 'text-blue-600 bg-blue-50 border-blue-600'
        : 'text-gray-700 border-transparent hover:border-blue-300'
    }`}
  >
    {item.label}
  </button>
 ) ) }

          </div>

          {/* <div className="p-4 sm:p-6 border-t border-gray-200 mt-auto">
            <button
              onClick={toggleMenu}
              className="w-full bg-yellow-500 hover:bg-blue-800 hover:text-white text-black px-4 py-3 text-base sm:text-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md rounded-sm"
            >
              Contact Us
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Navbar