

"use client";

import { sectionImages } from '../../components/imgs';
import { Heart, Monitor, Camera, Bed, Users } from 'lucide-react';

import React, { useState } from 'react';

interface AboutProps {
  showBgImage?: boolean;
  isAboutPage?: boolean; // New prop to determine if we're on the about page
}

// Custom Heart with Heartbeat Component
const HeartWithBeat = ({ className = "w-8 h-8" }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Filled Yellow Circle Behind Heart */}
      <circle
        cx="50"
        cy="50"
        r="48"                   // slightly larger than heart
        fill="#FCD34D"           // solid yellow
      />

      {/* Heart Shape (on top of circle) */}
      <path
        d="M50 85C50 85 15 60 15 35C15 25 25 15 35 15C40 15 45 17 50 22C55 17 60 15 65 15C75 15 85 25 85 35C85 60 50 85 50 85Z"
        fill="url(#heartGradient)"
      />

      {/* Heartbeat Line (brighter + glow) */}
      <path
        d="M20 50 L30 50 L35 30 L40 70 L45 20 L50 80 L55 50 L80 50"
        fill="none"
        stroke="#FACC15"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Glow Effect */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Heart Gradient */}
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

interface AboutProps {
  showBgImage?: boolean;
  isAboutPage?: boolean;
}


const About = ({ showBgImage = true, isAboutPage = false }: AboutProps) => {
  const bgImage = sectionImages.about;

  const equipmentData = [
    {
      title: "ICU Equipment",
      description: "From advanced ventilators to patient monitors, we supply critical care equipment that ensures patient safety and supports healthcare professionals in delivering optimal care."
    },
    {
      title: "Imaging Equipment", 
      description: "Our range includes state-of-the-art imaging solutions such as MRI machines, CT scanners, ultrasound devices, and X-ray systems, which provide accurate diagnostics and enhance treatment outcomes."
    },
    {
      title: "Hospital Furniture",
      description: "We offer a variety of hospital furniture designed for comfort, functionality, and durability, including hospital beds, bedside cabinets, and overbed tables, all crafted to support patient recovery and improve workflow efficiency for healthcare staff."
    },
    {
      title: "Patient Care Products",
      description: "From infusion pumps to patient transport systems, our patient care products are designed to enhance the quality of care and ensure patient comfort and safety."
    }
  ];

  const whyChooseData = [
    {
      title: "Expertise and Experience",
      description: "With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.",
      image: "/images/T1.jpg"
    },
    {
      title: "Customer-Centric Approach", 
      description: "Our customers are at the heart of everything we do. We strive to build long-term relationships based on trust, transparency, and mutual respect. Our dedicated customer support team is always ready to assist with any inquiries or service needs.",
      image: "/images/T3.webp"
    },
    {
      title: "Quality Assurance",
      description: "We adhere to strict quality standards and ensure that all our products meet international certifications and regulatory requirements. Our rigorous quality control processes guarantee that you receive only the best products.",
      image: "/images/T4.webp"
    },
    {
      title: "Comprehensive Support",
      description: "Beyond providing high-quality equipment, we offer comprehensive after-sales support, including installation, maintenance, and training services to ensure that your equipment operates efficiently and effectively.",
      image: "/images/T5.avif"
    }
  ];

  const doctorProfiles = [
    {
      name: "Dr. Haward",
      specialty: "Cardiologist",
      image: "/images/xyz.avif",
      cte: "CEO",
    },
    {
      name: "Dr. Sarah Ali", 
      specialty: "Neurologist",
      image: "/images/x.avif",
      cte: "CTO",
    },
    {
      name: "Dr. Emily Roi",
      specialty: "Pediatrician", 
      image: "/images/wxyz.avif",
      cte: "CFO",
    }
  ];

  return (
    <section id="about" className="bg-gray-50 overflow-x-hidden">
      {/* Top Hero Image */}
      {showBgImage && (
        <div
          className="relative h-64 md:h-96 bg-cover bg-center flex items-center mt-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center text-white">
            <div className="text-center px-4">
              <h1 
                className="text-4xl md:text-6xl font-bold"
                style={{ 
                  fontFamily: 'Calibri, sans-serif'
                }}
              >
                About Us
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - About Content */}
            <div className="space-y-3 mt-20 md:mt-0 md:pt-28 px-4 md:px-8">

              {/* About us with vertical line */}
              <div className="relative inline-block">
                <span className="absolute left-0 top-0 h-full w-1 bg-yellow-400"></span>
                <h3 className="font-sans text-base font-medium text-blue-500 pl-3">
                  About us
                </h3>
              </div>

              {/* Main heading */}
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-blue-500 leading-tight">
                Welcome to Our <span className="text-yellow-500">HornBill</span>
              </h2>

              {/* Paragraph */}
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-sans">
                At HornBill, we are dedicated to enhancing healthcare through the provision of top-quality medical equipment. As an authorized distributor in the Pakistan market, we take pride in being a trusted partner for healthcare providers, ensuring that they have access to the best tools to deliver exceptional care.
              </p>

              {/* Button */}
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>

            {/* Right Side - Overlapping Images */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Second Image - Moved Behind */}
              <div className="absolute top-5 right-0 w-3/5 h-3/5 z-0">
                <img 
                  src="/images/heartbeat.jpg" 
                  alt="Healthcare Team" 
                  className="w-full h-full object-cover shadow-xl"
                />
              </div>

              {/* First Image - Main */}
              <div className="absolute inset-0 w-4/5 h-full z-10">
                <img 
                  src="/images/abc.avif" 
                  alt="Medical Equipment" 
                  className="w-full h-full object-cover shadow-xl mt-40"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Kindness Card Section - Only on Home Page */}
      {!isAboutPage && (
        <div className="mt-0 lg:pt-0 bg-gray-50"> 
          <div className="px-4 lg:px-20">
            <div className="relative bg-blue-500 shadow-xl h-40 lg:h-80 overflow-hidden flex">
              
              {/* Left Side - Square Image with overlay text */}
              <div className="relative w-1/3 h-full overflow-hidden">
                <img 
                  src="/images/dctr4.jpg" 
                  alt="Medical Care" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-blue-600/40"></div>
                
                {/* Custom Heart with Heartbeat above the text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
                  <HeartWithBeat className="w-8 h-8 lg:w-12 lg:h-12" />
                  <span className="text-lg lg:text-4xl font-bold text-white text-center">
                    With a Touch of <br /> Kindness
                  </span>
                </div>
              </div>

              {/* Right Side - Doctor Profiles */}
              <div className="flex-1 flex items-center justify-center gap-8 lg:gap-16">
                {doctorProfiles.map((doctor, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white shadow-lg">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-white">{doctor.name}</h4>
                    <h4 className="text-sm font-semibold text-yellow-400">{doctor.cte}</h4>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Our Vision Section - Only on About Page */}
      {isAboutPage && (
        <div className="py-8 mt-0 lg:pt-8 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Image */}
              <div className="flex justify-center">
                <img 
                  src="/images/vision.webp" 
                  alt="Our Vision" 
                  className="h-80 w-auto object-cover shadow-xl"
                />
              </div>

              {/* Right Side - Vision Content */}
              <div className="text-left max-w-xl mx-auto lg:ml-0">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-blue-500 leading-tight mb-6">
                  Our <span className="text-yellow-400">Vision</span>
                </h2>
                <p className="text-sm text-gray-800 leading-relaxed font-sans">
                  Our vision is to be the leading provider of medical equipment in Pakistan, renowned for our commitment to quality, innovation, and customer satisfaction. We aim to empower healthcare providers with the tools they need to improve patient outcomes and advance the standards of healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Who We Are Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="w-1 h-6 bg-yellow-400 mr-3"></span>
              <h2 className="text-xl font-bold text-blue-500">Who We Are</h2>
              <span className="w-1 h-6 bg-yellow-400 ml-3"></span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-4">Who We <span className='text-yellow-400'> Are </span></h2>
            <p className="text-sm md:text-base font-sans font-light text-gray-900 leading-relaxed max-w-4xl mx-auto px-4">
              HornBill is a comprehensive supplier of a wide range of medical equipment, catering to various needs within the healthcare industry. Our portfolio includes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-6 lg:px-10">
            {equipmentData.map((item, index) => (
              <div key={index} className="bg-white shadow-lg p-6 md:p-8">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-500 rounded-full flex items-center justify-center w-12 h-12 md:w-14 md:h-14">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      className="w-6 h-6 md:w-8 md:h-8"
                    >
                      {/* White Heart */}
                      <path
                        d="M47.5 8c-5.5 0-10.1 3.1-15.5 9-5.4-5.9-10-9-15.5-9C7.6 8 2 15.1 2 23.5c0 14.2 30 32.5 30 32.5s30-18.3 30-32.5C62 15.1 56.4 8 47.5 8z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                      />
                      {/* Heartbeat Line extended to circle border */}
                      <polyline
                        points="2,32 16,32 24,20 32,44 40,28 62,32"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-800 text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose HornBill Section - Shows on About Page */}
      {isAboutPage && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-500 mb-6">Why Choose <span className='text-yellow-400'> HornBill? </span> </h2>
              <p className="text-base font-sans font-light text-gray-900 leading-relaxed max-w-4xl mx-auto">
                Expertise and Experience: With years of experience in the medical equipment industry, our team possesses the knowledge and expertise to provide tailored solutions that meet the specific needs of healthcare providers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
              {whyChooseData.map((item, index) => (
                <div key={index} className="bg-gray-50 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 justify-center items-center text-center">
                    <h3 className="text-xl font-medium text-blue-500 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-800 text-sm font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;