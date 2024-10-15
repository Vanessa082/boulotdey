import { Link } from "react-router-dom";
import { Job } from "../../../../interfaces/job";

const getAcronym = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
};

function JobCard({ job }: { job: Partial<Job> }) {
  const {
    title,
    companyName,
    location,
    deadline,
    salaryRange,
    employmentType,
    experienceLevel,
  } = job as Required<Job>;

  return (
    <div className="card bg-base-100 w-full border-2 shadow-md">
      <div className="card-body">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold text-gray-700">
            {getAcronym(companyName)}
          </div>
          <h2 className="card-title">{title}</h2>
        </div>

        <p className="bg-blue-100 text-blue-600 py-1 px-2 rounded-md text-sm font-medium my-2">
          {companyName}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="badge badge-outline">{location}</span>
          <span className="badge badge-outline">{employmentType}</span>
          <span className="badge badge-outline">onSite</span>
        </div>

        <div className="text-sm my-2">
          <span className="text-gray-600">Experience: </span>
          {experienceLevel}
        </div>

        {salaryRange && (
          <div className="text-sm">
            <span className="text-gray-600">salary: </span>
            {salaryRange}
          </div>
        )}

        <div className="text-sm ">
          <span className="text-gray-600">Dead line: </span>
          {new Date(deadline).toDateString()}
        </div>

        <Link to={`/job-board/${job._id}`} className="card-actions justify-end ">
          <button className="btn btn-primary cursor-pointer">View</button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
