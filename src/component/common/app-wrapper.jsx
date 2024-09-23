import { Outlet } from "react-router-dom";
import NavbarOne from "./header/navbar-one";

export default function AppWrapper() {
  return(
    <>
    <NavbarOne />
    <Outlet/>

    </>
  )
}