// import { Phone, MapPin } from 'lucide-react';

// export default function TopBar() {
//   return (
//     <div className="bg-white shadow-sm border-b border-gray-100" style={{ fontFamily: 'Inter, sans-serif' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
//         <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
          
//           {/* Logo - Centered on mobile, left on desktop */}
//           <div className="flex-shrink-0 mx-auto md:mx-0 md:ml-3 lg:ml-5">
//             <img 
//               src="/logo.webp" 
//               alt="Company Logo" 
//               className="w-32 h-8 sm:w-36 sm:h-9 md:w-40 md:h-10 lg:w-48 lg:h-12 xl:w-56 xl:h-14 object-contain"
//             />
//           </div>

//           {/* Contact Info - Only visible on medium screens and up */}
//           <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8 ml-6 lg:ml-10 xl:ml-14 mr-4 lg:mr-8 xl:mr-0">
            
//             {/* Phone Section */}
//             <div className="flex items-center space-x-2 lg:space-x-3">
//               <div className="w-8 h-8 lg:w-9 lg:h-9 bg-transparent rounded-full flex items-center justify-center border-[2px] border-blue-500">
//                 <svg className="w-4 h-4 lg:w-5 lg:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//                   <path d="M15.5 3.5a4 4 0 0 1 4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//                   <path d="M15.5 1a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//                 </svg>
//               </div> 
              
//               <div className="flex flex-col">
//                 <span className="text-xs lg:text-sm text-black tracking-wide">Call Us</span>
//                 <span className="text-xs lg:text-sm xl:text-base font-bold text-blue-500" style={{ fontFamily: 'Mozilla Text, sans-serif' }}>
//                   0569123-9
//                 </span>
//               </div>
//             </div>

//             {/* Location Section */}
//             <div className="flex items-center space-x-2 lg:space-x-3">
//               <div className="w-8 h-8 lg:w-9 lg:h-9 bg-transparent rounded-full flex items-center justify-center border-[2px] border-blue-500">
//                 <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                 </svg>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-xs lg:text-sm text-black">Visit Us :</span>
//                 <span className="text-xs lg:text-sm xl:text-base font-bold text-blue-500" style={{ fontFamily: 'Mozilla Text, sans-serif' }}>
//                   House no 2, Main Service <br className="hidden lg:block" /> 
//                   <span className="lg:hidden"> </span>road, G 16/9, Islamabad
//                 </span>
//               </div>
//             </div>

//             {/* Contact Button */}
//             <button className="bg-yellow-500 hover:bg-blue-800 hover:text-white text-black px-3 py-2 lg:px-5 lg:py-2.5 xl:px-7 xl:py-3 text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md ml-4 lg:ml-8 xl:ml-12">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }