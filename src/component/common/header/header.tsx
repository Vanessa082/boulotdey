import { Link } from "react-router-dom";
import { useState } from "react";
import { TextLogo } from "../../ui/text-logo";
import {   FaBars, FaTimes } from "react-icons/fa"; // Importing React Icons

interface NavItem {
  text: string;
  href: string;
}

const navItems: NavItem[] = [
  { text: "Home", href: "/" },
  { text: "Job Board", href: "/job-board" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between bg-app-gray-0 shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out">
      {/* Logo */}
      <Link to="/">
        <TextLogo />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex font-sans font-bold items-center space-x-6">
        {navItems.map(({ text, href }) => (
          <Link
            key={text}
            to={href}
            className=" hover:text-appbg-app-green-500 transition-colors"
          >
            <span>{text}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-app-gray-0 shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map(({ text, href }) => (
              <li key={text}>
                <Link
                  to={href}
                  className="flex items-center space-x-1 text-lg font-bold hover:text-app-green-500 transition-colors"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  <span>{text}</span>
                </Link>
              </li>
            ))}

            {/* CTA Buttons for Mobile */}
            <li>
              <Link to="/login">
                <button className="bg-app-green-500 px-5 py-2.5 w-full font-sans font-bold rounded-md text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
                   Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/post-job">
                <button className="bg-app-green-500 px-5 py-2.5 w-full rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
                   Post Job
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Buttons for Desktop */}
      <div className="hidden md:flex space-x-4">
        <Link to="/login">
          <button className="bg-app-green-500 px-5 py-2.5 font-sans font-bold rounded-md text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center">
             Login
          </button>
        </Link>

        <Link to="/post-job">
          <button className="bg-app-green-500 px-5 py-2.5 rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center">
             Post Job
          </button>
        </Link>
      </div>
    </header>
  );
}
