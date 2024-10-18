import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import ScrollToTop from "./scroll";

export default function AppWrapper() {
  const location = useLocation();
  const excludedRoutes = ["/login", "/create-account"];

  return (
    <div className="w-full min-h-screen  bg-app-gray-0 flex flex-col items-center justify-start border mx-auto">
      {!excludedRoutes.includes(location.pathname) && <Header />}
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center mx-auto">
        <Outlet />
      </div>
      {!excludedRoutes.includes(location.pathname) && <ScrollToTop />}
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}
