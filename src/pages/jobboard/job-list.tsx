import JobCard from "./job-card";

const jobs = [
  {
    title: "Mechanic",
    company: "AutoFix Cameroon",
    location: "Douala, Cameroon",
    type: "Full-time",
    applyBy: "October 29, 2024",
    salary: "100,000 XAF",
    onSite: true,
    experienceLevel: "0-2 years",
  },
  {
    title: "Plumber",
    company: "PlumbTech Cameroon",
    location: "Yaounde, Cameroon",
    type: "Contract",
    applyBy: "November 1, 2024",
    salary: "80,000 XAF",
    onSite: true,
    experienceLevel: "2-5 years",
  },
  {
    title: "Electrician",
    company: "Power Services Cameroon",
    location: "Bamenda, Cameroon",
    type: "Full-time",
    applyBy: "October 31, 2024",
    salary: "90,000 XAF",
    onSite: true,
    experienceLevel: "5+ years",
  },
  {
    title: "Tailor",
    company: "Cameroonian Fashion House",
    location: "Bafoussam, Cameroon",
    type: "Part-time",
    applyBy: "November 5, 2024",
    salary: "60,000 XAF",
    onSite: true,
    experienceLevel: "0-2 years",
  },
  {
    title: "Carpenter",
    company: "WoodCraft Cameroon",
    location: "Douala, Cameroon",
    type: "Contract",
    applyBy: "October 25, 2024",
    salary: "95,000 XAF",
    onSite: true,
    experienceLevel: "2-5 years",
  },
  {
    title: "Painter",
    company: "ColorWave Cameroon",
    location: "Garoua, Cameroon",
    type: "Full-time",
    applyBy: "November 2, 2024",
    salary: "85,000 XAF",
    onSite: true,
    experienceLevel: "0-2 years",
  },
  {
    title: "Housekeeper",
    company: "Hotel Resort",
    location: "Limbe, Cameroon",
    type: "Full-time",
    applyBy: "October 28, 2024",
    salary: "70,000 XAF",
    onSite: true,
    experienceLevel: "0-2 years",
  },
  {
    title: "Welder",
    company: "IronWorks Cameroon",
    location: "Kumba, Cameroon",
    type: "Contract",
    applyBy: "November 6, 2024",
    salary: "110,000 XAF",
    onSite: true,
    experienceLevel: "5+ years",
  },
  {
    title: "Driver",
    company: "LogisticsPro",
    location: "Bertoua, Cameroon",
    type: "Full-time",
    applyBy: "October 27, 2024",
    salary: "75,000 XAF",
    onSite: true,
    experienceLevel: "0-2 years",
  },
  {
    title: "Barber",
    company: "HairMasters",
    location: "Douala, Cameroon",
    type: "Part-time",
    applyBy: "October 26, 2024",
    salary: "50,000 XAF",
    onSite: true,
    experienceLevel: "0-2 years",
  },
];

export default function JobList (){
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-3">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            applyBy={job.applyBy}
            salary={job.salary}
            onSite={job.onSite}
            jobType={job.type}
            experienceLevel={job.experienceLevel}
          />
        ))}
      </div>
      <button className="btn btn-primary ">Load More</button>
    </div>
  );
};
