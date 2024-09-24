import { TextLogo } from "../../../ui/text-logo"
import { Link } from "react-router-dom"

export default function NavbarTwo() {
  return (
    <div className="flex  w-full py-2 justify-center  bg-app-gray-50">
      <nav className="flex mx-auto w-primary-app-width justify-between items-cente">
        <Link to="/">
          <TextLogo className="text-app-gray-900" />
        </Link>
        <div className="flex justify-between items-center gap-4">
          <button className="btn text-app-green-500 bg-info  w-btn-width font-bold py-1  rounded inline-flex items-center hover:bg-primary hover:text-primary-content ">Sign in</button>
          <button className="btn bg-app-green-500 text-white w-btn-width font-bold py-1 rounded inline-flex items-center hover:text-primary hover:bg-info">Post Jobs</button>
        </div>
      </nav>
    </div>
  )
}
