import { FaSearch } from "react-icons/fa";

export default function SearchJob() {
  return (
    <form className="bg-app-gray-0 rounded-md flex gap-3">
      <div className="flex justify-between text-app-gray-300 gap-2 items-center px-3">
        <FaSearch />
        <input type="text" className="outline-none" placeholder="search available jobs"/>
      </div>
      <button className="bg-app-green-500 text-app-gray-0 px-5 py-2.5 w-full font-sans font-bold rounded-r">Search</button>
    </form>
  )
}