import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TextLogo } from "../../ui/text-logo";

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

export default function Footer() {
  return (
    <footer className=" w-full px-4 bg-[#f5f5f5] flex flex-col justify-between text-app-green-900 py-10 gap-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <TextLogo />
        <p className="text-sm">Connecting job seekers and employers.</p>
        <nav className="hidden md:flex font-sans  font-bold items-center gap-10">
          {navItems.map(({ text, href }) => (
            <Link key={text} to={href} className="">
              <span>{text}</span>
            </Link>
          ))}
        </nav>
        <div className="flex gap-6  text-4xl">
          <FaFacebook className="text-blue-500" />
          <FaTwitter className="text-black" />
        </div>
      </div>
      <div className="text-center border-t border-white pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} BoulotDey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
