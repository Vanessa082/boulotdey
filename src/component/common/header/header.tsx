import { useLocation } from "react-router-dom";
import NavbarOne from "./sub/navbar-one";
import NavbarTwo from "./sub/navbar-two";

const excludedPaths = ["/login", "/signup"];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <NavbarOne />

      {excludedPaths.includes(pathname) ? null : <NavbarTwo />}
    </>
  );
}
