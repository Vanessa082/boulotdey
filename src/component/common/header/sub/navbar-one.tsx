import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars } from "react-icons/fa";

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

  // Improved UX for handling focus and key events (for accessibility)
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false); // Close on ESC
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isOpen]);

  return (
    <div className="w-full py-3 bg-gray-50 relative">
      <nav className="flex max-w-7xl mx-auto px-4 justify-between items-center">
        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-gray-600 items-center">
          {NavItems.map(({ text, href }) => (
            <li
              className="relative hover:text-green-500 hover:underline"
              key={text}
            >
              <a href={href} className="text-base font-medium">
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone Button */}
        <div className="flex items-center text-gray-900 hover:text-green-500">
          <FaPhoneAlt />
          <a href="tel:+237671492013" className="ml-2 font-medium">
            (237) 671-492-013
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="absolute left-0 right-0 top-16 bg-white shadow-lg z-10"
          onBlur={() => setIsOpen(false)} // Close when losing focus
        >
          <ul className="flex flex-col items-center gap-4 p-4">
            {NavItems.map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  className="text-gray-900 hover:text-green-500"
                  onClick={() => setIsOpen(false)} // Close menu on selection
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
