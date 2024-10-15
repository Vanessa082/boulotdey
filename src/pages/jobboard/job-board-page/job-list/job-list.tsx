import { JobListData } from "../../common/dummy-data";
import JobCard from "./job-card";

export default function JobList() {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-3">
        {JobListData.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}
      </div>
      <button className="btn btn-primary ">Load More</button>
    </div>
  );
}
