import Filter from "./filters";
import JobList from "./job-list";

export default function JobBoard() {
  return (
    <div className="w-full p-4 flex flex-col justify-between  items-center">
      <Filter />
      <JobList />
    </div>

  );
}
