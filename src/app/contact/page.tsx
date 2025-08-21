
"use client";

import React, { useState } from 'react'

interface ContactProps {
  showBgImage?: boolean
}

const Contact = ({ showBgImage = true }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact">
      <div className="min-h-screen">
        {/* Hero Background */}
        {showBgImage && (
          <div
            className="relative bg-cover bg-center bg-no-repeat h-64 md:h-[36rem] flex items-center justify-center text-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/pop5.jpg)"
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 max-w-3xl px-4 text-white mt-45">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-4">
                Contact Us
              </h1>
              <p className="text-sm sm:text-base md:text-lg opacity-90 font-sans">
                Thank you for considering HornBill for your medical equipment
                needs. We look forward to the opportunity to serve you and
                contribute to the success of your healthcare facility. For more
                information about our products and services, please feel free to
                contact us.
              </p>
            </div>
          </div>
        )}

        {/* Contact Content */}
        <div className="py-8 sm:py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-md"> {/* stays left-aligned now */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-500">
                Email us
              </h2>

              {/* Simplified Form */}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                      placeholder-gray-500 placeholder-opacity-100 text-sm sm:text-base"
                    placeholder="Name"
                  />
                </div>

                {/* Email + Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                        placeholder-gray-500 placeholder-opacity-100 text-sm sm:text-base"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                        placeholder-gray-500 placeholder-opacity-100 text-sm sm:text-base"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 
                      focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                      placeholder-gray-500 placeholder-opacity-100 text-sm sm:text-base resize-none"
                    placeholder="Message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-20 sm:w-25 h-10 sm:h-12 bg-yellow-400 text-white hover:bg-blue-500 -mt-3 
                             transition-colors duration-200 font-semibold ml-auto block font-sans text-sm sm:text-base"
                >
                  Send
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact