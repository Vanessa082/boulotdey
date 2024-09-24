import { Outlet } from "react-router-dom";
import Header from "./header/header";

export default function AppWrapper() {
  return (
    <div className="w-full min-h-screen flex bg-app-gray-0 flex-col items-center justify-start border mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
