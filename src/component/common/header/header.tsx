import { useLocation } from "react-router-dom";
import { NavbarOne, NavbarTwo } from "./sub";

const excludedPaths = ["/login", "/signup"];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className="w-primary-app-width">
      <NavbarOne />

      {excludedPaths.includes(pathname) ? null : <NavbarTwo />}
    </div>
  );
}
