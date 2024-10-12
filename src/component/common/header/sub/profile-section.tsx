import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../../providers/context/app-context/app-context";
import {
  
  FaBell,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { CLIENT_STORAGE } from "@orashus/client-storage";

export default function ProfileSection({ isOpen, toggleDropdown }: {
  toggleDropdown: () => void;
  isOpen: boolean;
}) {
  const { currentUser, currentUserLoading, setRefetchCurrentUser } = useAppContext();
  const navigate = useNavigate();

  const localStorage = new CLIENT_STORAGE("local");

  const handleLogout = () => {
    localStorage.remove("token");
    setRefetchCurrentUser((prev) => !prev);
    if (!currentUserLoading) {
      return <div className="skeleton h-8 w-52 rounded-sm"/>
    }
    navigate("/");
  };

  if (currentUserLoading) {
    return <div className="skeleton h-8 w-52 rounded-sm"/>
  }

  return currentUser ? (
    <>
      <Link to="/notification">
        <FaBell className="text-primary h-6 w-6" />
      </Link>

      {/* <Link to="/chats" className="flex items-center gap-2">
        <FaComments className="text-primary h-6 w-6" />
        Chat
      </Link> */}

      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          className="flex cursor-pointer items-center gap-3"
          onClick={toggleDropdown}
        >
          <button className="bg-primary rounded-full px-3 py-1.5 font-sans font-bold text-white">
            {currentUser.email.charAt(0).toUpperCase()}
          </button>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

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

      {/* {isEmployer && (

        <Link to="/post-job">
          <button className="bg-primary px-5 py-2.5 w-full rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
            Post Job
          </button>
        </Link>

      )} */}
    </>
  ) : (
    <>
      <li>
        <Link to="/login">
          <button className="bg-app-gray-0 border-2 border-primary px-5 py-1 w-full font-sans font-bold rounded-md text-primary hover:bg-opacity-90 transition-all flex items-center justify-center">
            Login
          </button>
        </Link>
      </li>
      {/* <li>
        <Link to="/post-job">
          <button className="bg-primary px-5 border-1s py-2 w-full rounded-md font-bold font-sans text-app-gray-0 hover:bg-opacity-90 transition-all flex items-center justify-center">
            Post Job
          </button>
        </Link>
      </li> */}
    </>
  );
}