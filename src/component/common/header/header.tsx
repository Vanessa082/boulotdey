import { useLocation } from "react-router-dom";
import { NavbarOne, NavbarTwo } from "./sub";

const excludedPaths = ["/login", "/signup"];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className="w-full flex flex-col bg-app-gray-0">
      <NavbarOne />

      {excludedPaths.includes(pathname) ? null : <NavbarTwo />}
    </div>
  );
}
