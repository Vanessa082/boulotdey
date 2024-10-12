import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextLogo } from "../../ui/text-logo";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useAppContext } from "../../../providers/context/app-context/app-context";
import SearchJob from "./search-job";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { ProfileSection } from "./sub";

interface NavItem {
  text: string;
  href: string;
}

const navItems: NavItem[] = [
  { text: "Home", href: "/" },
  { text: "Jobs", href: "/job-board" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const {currentUserLoading, setRefetchCurrentUser} = useAppContext()
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const localStorage = new CLIENT_STORAGE("local");
  const handleLogout = () => {
    localStorage.remove("token");
    setRefetchCurrentUser((prev) => !prev);
    navigate("/");
    if (!currentUserLoading) {
      return <div className="skeleton h-8 w-52 rounded-sm"/>
    }
  };
  return (
    <header className="w-full px-4 py-2 flex items-center justify-between bg-app-gray-0  sticky top-0 z-50 transition-all duration-300 ease-in-out ">
      <div className="flex gap-20">
        <Link to="/">
          <TextLogo />
        </Link>
        <nav className="hidden md:flex font-sans  font-bold items-center gap-10">
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
      </div>

      {/* Smaller screens */}

      <div className="md:hidden text-app-gray-900 flex justify-between items-center gap-4">
        <FaSearch className="h-6 w-6" onClick={openModal} />

        {currentUser ? (
          <>
            <li>
              <Link to="/notification">
                <FaBell className="text-primary h-7 w-7" />
              </Link>
            </li>

            <li>
              <div className="dropdown dropdown-end">

                <button tabIndex={0} onClick={toggleDropdown} className="bg-primary cursor-pointer rounded-full px-3 py-1.5 font-sans font-bold text-white">
                  {currentUser.email.charAt(0).toUpperCase()}
                </button>

                <ul
                  tabIndex={0}
                  className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? "block" : "hidden"}`}
                >
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                  <li onClick={handleLogout} className="cursor-pointer">
                    Log out
                  </li>
                </ul>
              </div>
            </li>

          </>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} className="h-7 w-7" />
          </Link>
        )}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {isModalOpen && <SearchJob closeModal={closeModal} />}

        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40">
            <div className="fixed top-0 left-0 w-3/4 sm:w-2/4 md:w-1/3 h-full bg-white shadow-lg z-50">
              <div className="flex flex-col p-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="self-end mb-8"
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <nav>
                  <ul className="flex flex-col space-y-6 text-lg font-bold">
                    {navItems.map(({ text, href }) => (
                      <li key={text}>
                        <Link
                          to={href}
                          className="hover:text-blue-500 transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:flex gap-5 items-center">
        <SearchJob />

        <ProfileSection
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </header>
  );
}
