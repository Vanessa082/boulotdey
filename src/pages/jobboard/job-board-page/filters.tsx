import { FaFilter } from "react-icons/fa";
import PostJobButton from "../post-job/post-job-btn";

export default function Filter() {
  return (
    <div className="w-full flex justify-between items-center bg-[#edf4ff] py-4 border-y border-solid">
      {/* <select>
          <option>All Types</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>
        <select>
          <option>All Experience</option>
          <option>0-2 years</option>
          <option>2-5 years</option>
          <option>5+ years</option>
        </select>
        <select>
          <option>All Locations</option>
          <option>Douala</option>
          <option>Yaounde</option>
        </select> */}
      <button className="bg-app-gray-0  flex items-center gap-2 text-primary border-2 py-3 px-8 rounded-md">
        <FaFilter />
        Filters
      </button>
      <PostJobButton />
    </div>
  );
};
