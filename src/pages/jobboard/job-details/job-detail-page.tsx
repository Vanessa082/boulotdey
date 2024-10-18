import { useEffect, useState } from "react";
import ApplicationForm from "./application-form";
import type { Job } from "../../../interfaces/job";
import { useParams } from "react-router-dom";
import { getOneJob } from "./api/endpoints";

export default function JobDetailPage() {
  // const [JobDetails] = useState<Job | null>(null);
  const [language] = useState("en");

  const [job, setJob] = useState<Job | null>(null);
  const [jobLoading, setJobLoading] = useState<boolean>(true);
  
  const params = useParams<{ job_id: string }>();

  useEffect(() => {
    setJobLoading(true);

    getOneJob(params.job_id!)
      .then(({ data }) => {
        setJob(data);
      }).catch(console.warn)
      .finally(() => {
        setJobLoading(false);
      });
  }, [params.job_id]);


  if (jobLoading) return (
    <p>
      loading job ...
    </p>
  );

  if (!job) return (
    <h3>404!, job not found!</h3>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <button className="btn btn-primary">Apply for this Job</button>
        </div>
        <h2 className="text-xl mt-2">{job.companyName}</h2>
        <p className="text-gray-600">{job.location}</p>

        <div className="mt-4">
          <h3 className="text-2xl font-bold">
            {language === "en" ? "Job Details" : "Détails du poste"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <p>
              {language === "en" ? "Location" : "Emplacement"}: {job.location}
            </p>
            <p>
              {language === "en" ? "Employment Type" : "Type d'emploi"}:{" "}
              {job.employmentType}
            </p>
            <p>
              {language === "en" ? "Deadline" : "Date limite"}: {new Date(job.deadline).toDateString()}
            </p>
            <p>
              {language === "en" ? "Salary Range" : "Échelle salariale"}:{" "}
              {job.salaryRange}
            </p>
            <p>
              {language === "en"
                ? "Language Requirements"
                : "Exigences linguistiques"}
              : {job.languageRequirements}
            </p>
          </div>
        </div>

        <div className="mt-6">
          {/* <h3 className="text-2xl font-bold">
            {job.language === "en" ? "Job Description" : "Description du poste"}
          </h3> */}
          <p className="mt-2 text-gray-700">{job.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">
            {language === "en" ? "Qualifications" : "Qualifications"}
          </h3>
          <ul className="list-disc ml-5 mt-2">
            {job.qualifications.map((qualification, index) => (
              <li key={index} className="text-gray-700">
                {qualification}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">
            {language === "en" ? "Skills" : "Compétences"}
          </h3>
          <ul className="list-disc ml-5 mt-2">
            {job.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">
            {language === "en" ? "Benefits" : "Avantages"}
          </h3>
          <ul className="list-disc ml-5 mt-2">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">
            {language === "en"
              ? "Other Relevant Jobs"
              : "Autres postes pertinents"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h4 className="font-bold">Finance Executive</h4>
              <p className="text-gray-600">Douala, Cameroon</p>
              <p className="text-gray-600">Full-time</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h4 className="font-bold">Medical Sales Representative</h4>
              <p className="text-gray-600">Yaounde, Cameroon</p>
              <p className="text-gray-600">Part-time</p>
            </div>
          </div>
        </div>
      </div>

      <ApplicationForm />
    </div>
  );
}
