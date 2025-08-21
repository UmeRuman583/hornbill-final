import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        {/* ✅ Fixed: removed stray < */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + Intro + Social */}
          <div>
            <img src="/logo.webp" alt="HornBill Logo" className="w-50 mb-4" />
            <p className="text-gray-200 mb-4 leading-relaxed">
              At HornBill, we are dedicated to enhancing healthcare through the
              provision of top-quality medical equipment.
            </p>
            <p className="font-semibold mb-3">Follow Us:</p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-500 transition"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-blue-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-8">
            <h3 className="text-lg font-semibold mb-2 ">Quick Links</h3>
            <div className="w-10 h-1 bg-yellow-400 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <div className="w-9 h-1 bg-yellow-400 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Urgent Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Dot Testing
                </a>
              </li>
            </ul>
          </div>

          {/* Hours of Operation */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Hours of Operation</h3>
            <div className="w-12 h-1 bg-yellow-400 mb-5 "></div>
            <p className="text-gray-200">Mon-Fri: 8:00am - 7:30pm</p>
            <p className="text-gray-200">Sat-Sun: 9:00am - 5:00pm</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
            <div className="w-10 h-1 bg-yellow-400 mb-4"></div>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <p className="text-gray-200 font-semibold">Call Us</p>
                  <p className="text-gray-100">051-2308328-9</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
  <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
    <FaMapMarkerAlt className="text-white" />
  </div>
  <div>
    <p className="text-gray-200 font-semibold">Visit Us</p>
    <p className="text-gray-100">
      House No 02,  <br />Main Service Road, 
      <br /> G-16/4, Islamabad
    </p>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white mt-10 pt-6 text-left text-sm text-gray-200">
          &copy; 2025 HornBill. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
