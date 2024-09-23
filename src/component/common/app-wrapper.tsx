import { Outlet } from "react-router-dom";
import Header from "./header/header";

export default function AppWrapper() {
  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center justify-start border mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
