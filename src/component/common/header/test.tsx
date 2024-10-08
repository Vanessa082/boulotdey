// import React, { useState } from "react";
// import { FiSearch, FiMenu, FiX } from "react-icons/fi";

// export default function MobileNavbar() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="text-xl font-bold">Job Hound</div>

//       {/* Icons */}
//       <div className="flex items-center space-x-4">
//         {/* Search Icon */}
//         <button onClick={() => setIsSearchOpen(true)}>
//           <FiSearch size={24} />
//         </button>

//         {/* Menu Icon */}
//         <button onClick={() => setIsMenuOpen(true)}>
//           <FiMenu size={24} />
//         </button>
//       </div>

//       {/* Search Bar Dropdown */}
//       {isSearchOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-white p-4 z-50">
//           <div className="flex items-center mb-4">
//             <input
//               type="text"
//               className="w-full p-2 border rounded"
//               placeholder="Search..."
//             />
//             <button onClick={() => setIsSearchOpen(false)} className="ml-2">
//               <FiX size={24} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Menu Drawer */}
//       {isMenuOpen && (
//         <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-4 z-50">
//           <button onClick={() => setIsMenuOpen(false)} className="mb-4">
//             <FiX size={24} />
//           </button>
//           <nav>
//             <ul className="space-y-4">
//               <li>
//                 <a href="#home" className="block">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#faq" className="block">
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a href="#signup" className="block">
//                   Sign Up
//                 </a>
//               </li>
//               <li>
//                 <a href="#blog" className="block">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="block">
//                   About
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       )}

//       {/* Overlay */}
//       {(isSearchOpen || isMenuOpen) && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={() => {
//             setIsSearchOpen(false);
//             setIsMenuOpen(false);
//           }}
//         ></div>
//       )}
//     </div>
//   );
// }
