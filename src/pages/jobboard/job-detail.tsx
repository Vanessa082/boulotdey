import { useState } from 'react';
import ApplicationForm from './application-form';

interface JobDetailProps {
  jobTitle: string;
  companyName: string;
  location: string;
  employmentType: string;
  deadline: string;
  salaryRange: string;
  description: string;
  qualifications: string[];
  skills: string[];
  benefits: string[];
  languageRequirements: string;
}

const sampleJob = {
  jobTitle: 'Finance Executive',
  companyName: 'Cherubino Ltd',
  location: 'Douala, Cameroon',
  employmentType: 'Full-time',
  deadline: 'November 3, 2024',
  salaryRange: '200,000 - 300,000 CFA',
  description: 'We are seeking a dynamic and experienced Finance Executive to join our team...',
  qualifications: ['2 years of experience in finance', 'Proficiency in Excel and Word', 'Strong communication skills'],
  skills: ['Accounting', 'Time Management', 'Teamwork'],
  benefits: ['Health Insurance', 'Flexible working hours', 'Company Car'],
  languageRequirements: 'English, French',
};

export default function JobDetail({
  jobTitle,
  companyName,
  location,
  employmentType,
  deadline,
  salaryRange,
  description,
  qualifications,
  skills,
  benefits,
  languageRequirements,
}: JobDetailProps) {
  const [language] = useState('en');
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{jobTitle}</h1>
          <button className="btn btn-primary">Apply for this Job</button>
        </div>
        <h2 className="text-xl mt-2">{companyName}</h2>
        <p className="text-gray-600">{location}</p>

        <div className="mt-4">
          <h3 className="text-2xl font-bold">{language === 'en' ? 'Job Details' : 'Détails du poste'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <p>{language === 'en' ? 'Location' : 'Emplacement'}: {location}</p>
            <p>{language === 'en' ? 'Employment Type' : "Type d'emploi"}: {employmentType}</p>
            <p>{language === 'en' ? 'Deadline' : 'Date limite'}: {deadline}</p>
            <p>{language === 'en' ? 'Salary Range' : 'Échelle salariale'}: {salaryRange}</p>
            <p>{language === 'en' ? 'Language Requirements' : 'Exigences linguistiques'}: {languageRequirements}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">{language === 'en' ? 'Job Description' : 'Description du poste'}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">{language === 'en' ? 'Qualifications' : 'Qualifications'}</h3>
          <ul className="list-disc ml-5 mt-2">
            {qualifications.map((qualification, index) => (
              <li key={index} className="text-gray-700">{qualification}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">{language === 'en' ? 'Skills' : 'Compétences'}</h3>
          <ul className="list-disc ml-5 mt-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">{language === 'en' ? 'Benefits' : 'Avantages'}</h3>
          <ul className="list-disc ml-5 mt-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold">{language === 'en' ? 'Other Relevant Jobs' : 'Autres postes pertinents'}</h3>
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

<JobDetail {...sampleJob} />;
