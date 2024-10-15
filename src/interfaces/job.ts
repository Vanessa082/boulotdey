
const EmploymentTypeS = {
  CONTRACT: "CONTRACT",
  PART_TIME: "PART_TIME",
  FULL_TIME: "FULL_TIME",
  PERMINENT: "PERMINENT",
};

type EmploymentType = keyof typeof EmploymentTypeS;

interface Job {
  _id?: string;
  title: string;
  companyName: string;
  location: string;
  employmentType: EmploymentType;
  deadline: Date | string;
  salaryRange: string;
  description: string;
  qualifications: string[];
  experienceLevel?: string;
  skills: string[];
  benefits: string[];
  languageRequirements: string;
}

export type {
  Job,
  EmploymentType,
}

export {
  EmploymentTypeS,
}
