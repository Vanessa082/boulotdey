import { FaPhoneAlt } from "react-icons/fa";

interface NavItem {
  text: string;
  href: string;
};

const NavItems: NavItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Testimonial",
    href: "/",
  },
  {
    text: "Find Job",
    href: "/",
  },
];

export default function NavbarOne() {
  return (
    <div className="flex  w-full py-2 justify-center gap-96 bg-app-gray-50">
      <nav className="flex mx-auto w-primary-app-width justify-between items-center">
        <ul className="flex gap-6 justify-between items-center text-gray-600   cursor-pointer">
          {NavItems.map(({ text, href }) => (
            <li className="relative hover:text-app-green-500 hover:before:content-[''] hover:before:absolute hover:before:-bottom-1 hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-app-green-500" key={text}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>

        <h4 ><a href="tel:+237671492013" className="flex justify-between gap-2 items-center text-gray-900  hover:text-app-green-500 cursor-pointer"><FaPhoneAlt /> (237) 671-492-013</a></h4>
      </nav>
    </div>
  );
}
