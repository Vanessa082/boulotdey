import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface JobFormInputs {
  name: string;
  location: string;
  employmentType: string;
  deadline: string;
  personsNeeded: number;
  salaryRange: string;
  negotiable: boolean;
  experienceRequired: string;
  education: string;
  benefits: string[];
  status: string;
  category: string;
  skills: string[];
  otherSkills: string;
  jobImage: FileList;
}

export default function PostJobPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormInputs>();

  const [otherSkillField, setOtherSkillField] = useState(false);

  const onSubmit: SubmitHandler<JobFormInputs> = (data) => {
    console.log(data);
  };

  const employmentTypes = [
    "Independent",
    "Full-Time",
    "Part-Time",
    "Apprenticeship",
    "Casual",
    "Temporary",
  ];

  const categories = [
    "Hospitality",
    "Trade Artisan",
    "Personal or Domestic",
    "Entertainment",
    "Security",
    "Transport",
    "Other",
  ];

  const skillsList = [
    "Customer Service",
    "Personal Skills",
    "Technical Know-how",
    "Adaptability",
    "Time Management",
    "Flexibility",
    "Literacy",
    "Patience and Empathy",
    "Teamwork",
    "Hygiene",
    "Budget Management",
    "Physical Fitness",
    "Conflict Resolution",
    "Vehicle Maintenance",
    "Organization",
  ];

  const salaryRanges = [
    "100,000 - 200,000 FCFA",
    "200,000 - 400,000 FCFA",
    "400,000 - 600,000 FCFA",
    "600,000+ FCFA",
  ];

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Post a kJob</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div>
            <label className="block text-sm font-medium">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Job Title is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Location (Cameroon) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Yaoundé"
              {...register("location", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.location && (
              <span className="text-red-500 text-sm">Location is required</span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Employment Type <span className="text-red-500">*</span>
          </label>
          <select
            {...register("employmentType", { required: true })}
            className="select select-bordered w-full"
          >
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.employmentType && (
            <span className="text-red-500 text-sm">
              Employment Type is required
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Deadline <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.deadline && (
            <span className="text-red-500 text-sm">Deadline is required</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Number of Persons Needed <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register("personsNeeded", { required: true })}
            className="input input-bordered w-full"
            min={1}
          />
          {errors.personsNeeded && (
            <span className="text-red-500 text-sm">
              Number of persons needed is required
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Salary Range <span className="text-red-500">*</span>
          </label>
          <select
            {...register("salaryRange", { required: true })}
            className="select select-bordered w-full"
          >
            {salaryRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.salaryRange && (
            <span className="text-red-500 text-sm">
              Salary range is required
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Is the salary negotiable?</span>
            <input
              type="checkbox"
              className="checkbox"
              {...register("negotiable")}
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">Education / Trade</label>
          <input
            type="text"
            placeholder="e.g., Secondary School, Trade Certification"
            {...register("education")}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Benefits</label>
          <input
            type="text"
            placeholder="e.g., Health Insurance, Transport"
            {...register("benefits")}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            {...register("status")}
            className="select select-bordered w-full"
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            {...register("category")}
            className="select select-bordered w-full"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Skills</label>
          {skillsList.map((skill, index) => (
            <label className="flex items-center space-x-2" key={index}>
              <input
                type="checkbox"
                className="checkbox"
                {...register("skills")}
                value={skill}
              />
              <span>{skill}</span>
            </label>
          ))}
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) => setOtherSkillField(e.target.checked)}
            />
            <span>Other</span>
          </label>
          {otherSkillField && (
            <input
              type="text"
              placeholder="Specify other skills"
              {...register("otherSkills")}
              className="input input-bordered w-full mt-2"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Job Image</label>
          <input
            type="file"
            {...register("jobImage")}
            className="file-input file-input-ghost w-full max-w-xs"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Publish Job
        </button>
      </form>
    </div>
  );
}
