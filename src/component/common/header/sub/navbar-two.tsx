import { TextLogo } from "../../../ui/text-logo"
import { Link } from "react-router-dom"

export default function NavbarTwo() {
  return (
    <div className="flex  w-full py-2 justify-center gap-96 bg-app-gray-50">
      <nav className="flex mx-auto w-primary-app-width justify-between items-center">
        <Link to="/">
          <TextLogo />
        </Link>
        <h4 ><a href="tel:+237671492013" className="flex justify-between gap-2 items-center text-gray-900  hover:text-app-green-500 cursor-pointer"> (237) 671-492-013</a></h4>
      </nav>
    </div>
  )
}
