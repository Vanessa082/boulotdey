import { Link } from "react-router-dom";

interface JobProps {
  title: string;
  company: string;
  location: string;
  applyBy: string;
  salary?: string;
  onSite: boolean;
  jobType: string; 
  experienceLevel: string; 
}

function JobCard({
  title,
  company,
  location,
  applyBy,
  salary,
  jobType,
  experienceLevel,
}: JobProps) {
  const getAcronym = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('');
  };

  return (
    <div className="card bg-base-100 w-full border-2 shadow-md">
      <div className="card-body">
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold text-gray-700">
            {getAcronym(company)}
          </div>
          <h2 className="card-title">{title}</h2>
        </div>

        <p className="bg-blue-100 text-blue-600 py-1 px-2 rounded-md text-sm font-medium my-2">
          {company}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="badge badge-outline">{location}</span>
          <span className="badge badge-outline">{jobType}</span>
          <span className="badge badge-outline">
            onSite
          </span>
        </div>

        <div className="text-sm my-2">
          <span className="text-gray-600">Experience: </span>
          {experienceLevel}
        </div>

        {salary && (
          <div className="text-sm">
            <span className="text-gray-600">Salary: </span>
            {salary}
          </div>
        )}

        <div className="text-sm ">
          <span className="text-gray-600">Apply by: </span>
          {applyBy}
        </div>

        <Link to="/job-detail" className="card-actions justify-end ">
          <button className="btn btn-primary cursor-pointer">View</button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
