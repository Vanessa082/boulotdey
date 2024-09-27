import { useState } from "react";
import { FaPhoneAlt, FaBars } from "react-icons/fa"; // Importing icons

interface NavItem {
  text: string;
  href: string;
}

const NavItems: NavItem[] = [
  { text: "Home", href: "/" },
  { text: "Testimonial", href: "/" },
  { text: "Find Job", href: "/" },
];

export default function NavbarOne() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="w-full py-3 bg-app-gray-50 relative"> 
      <nav className="flex max-w-7xl mx-auto px-4 justify-between items-center">
        <ul className="hidden sm:flex gap-6 text-gray-600 items-center">
          {NavItems.map(({ text, href }) => (
            <li
              className="relative hover:text-app-green-500 hover:before:content-[''] hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-app-green-500"
              key={text}
            >
              <a href={href} className="text-base font-medium">
                {text}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center text-gray-900 hover:text-app-green-500">
          <FaPhoneAlt />
          <a href="tel:+237671492013" className="ml-2 font-medium">
            (237) 671-492-013
          </a>
        </div>

        <div className="sm:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)} 
          >
            <FaBars className="w-6 h-6" /> 
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown - Positioned absolutely */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2  shadow-lg z-10">
          <ul className="flex flex-col items-center gap-4 p-4">
            {NavItems.map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  className="text-gray-900 hover:text-app-green-500"
                  onClick={() => setIsOpen(false)} 
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
