import { Link } from "react-router-dom";
import { useState } from "react";
import { TextLogo } from "../../ui/text-logo";
import { FaBars, FaBell, FaChevronDown, FaChevronUp, FaComments, FaTimes } from "react-icons/fa"; // Importing React Icons
import { useAppContext } from "../../../providers/context/app-context/app-context";
import SearchJob from "../../../pages/landing/hero-section/search-job";

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
  const { currentUser } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const isEmployer = currentUser?.role === "EMPLOYER";

  return (
    <header className="w-full px-4 py-4 flex items-center justify-between bg-app-gray-0 shadow-md sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <Link to="/">
        <TextLogo />
      </Link>

      <nav className="hidden md:flex font-sans font-bold items-center space-x-6">
        {navItems.map(({ text, href }) => (
          <Link
            key={text}
            to={href}
            className="text-app-gray-900 transition-colors"
          >
            <span>{text}</span>
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-app-gray-0 shadow-lg z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map(({ text, href }) => (
              <li key={text}>
                <Link
                  to={href}
                  className="flex items-center space-x-1 text-lg font-bold hover:text-app-green-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{text}</span>
                </Link>
              </li>
            ))}

            {currentUser ? (
              <>
                <li>
                  <Link to="/notification">
                    <FaBell className="text-app-green-500 h-6 w-6" />
                  </Link>
                </li>

                <li>
                  <Link to="/chats">
                    <FaComments className="text-app-green-500 h-6 w-6" />
                    Chat
                  </Link>
                </li>
                {isEmployer && (
                  <li>
                    <Link to="/post-job">
                      <button className="bg-app-green-500 px-5 py-2.5 w-full rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
                        Post Job
                      </button>
                    </Link>
                  </li>
                )}
              </>
            ) : (
              <>

                <Link to="/login">
                  <button className="bg-app-green-500 px-5 py-2.5 w-full font-sans font-bold rounded-md text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
                    Login
                  </button>
                </Link>

                <li>
                  <Link to="/post-job">
                    <button className="bg-app-green-500 px-5 py-2.5 w-full rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
                      Post Job
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}

      {/* Buttons for Desktop */}
      <div className="hidden md:flex gap-5 items-center">
        {currentUser ? (
          <>
            <SearchJob />
            <Link to="/notification">
              <FaBell className="text-app-green-500 h-6 w-6" />
            </Link>


            <Link to="/chats" className="flex items-center gap-2">
              <FaComments className="text-app-green-500 h-6 w-6" />
              Chat
            </Link>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="flex cursor-pointer items-center gap-3"
                onClick={toggleDropdown}
              >
                <button className="bg-app-green-500 rounded-full px-3 py-1.5 font-sans font-bold text-white">
                  {currentUser.email.charAt(0).toUpperCase()}
                </button>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              <ul
                tabIndex={0}
                className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}
              >
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="/settings">Settings</a>
                </li>
                <li>
                  <a href="/logout">Log out</a>
                </li>
              </ul>
            </div>

            {isEmployer && (

              <Link to="/post-job">
                <button className="bg-app-green-500 px-5 py-2.5 w-full rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
                  Post Job
                </button>
              </Link>

            )}
          </>
        ) : (
          <>
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
          </>
        )
        }
      </div>
    </header >
  );
}
