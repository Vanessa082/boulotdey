import { FaSearch } from "react-icons/fa";

interface SearchJobProps {
  closeModal?: () => void;
}

export default function SearchJob({ closeModal }: SearchJobProps) {
  return (
    <>
      <form className="md:flex w-full hidden justify-between bg-app-gray-0 border-2 border-gray-300 text-app-gray-500 items-center px-3 rounded-md gap-2 py-1">
        <input
          type="text"
          className="outline-none flex-grow w-full"
          placeholder="Search available jobs"
        />
        <button type="submit" className="text-lg">
          <FaSearch />
        </button>
      </form>

      {/* <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50" /> */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 md:hidden">
        <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <form className="flex w-full justify-between bg-gray-100 border-2 border-gray-300 text-gray-500 items-center px-3 rounded-md gap-2 py-1">
            <input
              type="text"
              className="outline-none flex-grow w-full"
              placeholder="Search available jobs"
            />
            <button type="submit" className="text-lg">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
