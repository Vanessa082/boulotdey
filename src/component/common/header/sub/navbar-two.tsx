import { TextLogo } from "../../../ui/text-logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // FAB icons for mobile

export default function NavbarTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-2 bg-app-gray-0 shadow-lg ">
      <nav className="flex w-full max-w-7xl mx-auto px-4 md:px-8 justify-between items-center">
        <Link to="/">
          <TextLogo className="text-app-gray-900" />
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          <Link to="/login">
            <button className="btn text-primary bg-app-gray-0 font-bold py-2 px-5 rounded-lg items-center hover:bg-primary hover:text-primary-content transition-all">
              Sign In
            </button>
          </Link>

          <button className="btn bg-primary text-white font-bold py-2 px-5 rounded-lg items-center hover:text-primary hover:bg-info transition-all">
            Post Jobs
          </button>
        </div>

        <div className="md:hidden flex items-center relative">
          <button
            className="btn bg-primary text-white p-3 rounded-full shadow-lg transition-transform hover:bg-info"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaPlus size={20} />}
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-4 flex flex-col gap-3 p-4 bg-white shadow-lg rounded-lg">
              <Link to="/login">
                <button className="btn w-full text-primary bg-app-gray-0 font-bold py-2 rounded-lg items-center hover:bg-primary hover:text-primary-content transition-all">
                  Sign In
                </button>
              </Link>

              <button className="btn w-full bg-primary text-white font-bold py-2 rounded-lg items-center hover:text-primary hover:bg-info transition-all">
                Post Jobs
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
