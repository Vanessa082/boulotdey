import { FaHourglassHalf, FaUsers, FaUserShield } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import SearchJob from "./search-job";
interface STATS {
  _id: string,
  label: string,
  total: string,
  icon: React.ReactNode;
};

interface CardProps {
  label: string;
  count: string | number;
  icon: React.ReactNode; 
}

const STATS: STATS[] = [
  {
    _id: "1",
    label: "Verified Job Listings",
    total: "1,000+",
    icon: <MdWork />,
  },
  {
    _id: "2",
    label: "Trusted Employers",
    total: "200+",
    icon: <FaUserShield />,
  },
  {
    _id: "3",
    label: "Verified Worker Profiles",
    total: "1,500+",
    icon: <FaUsers />,
  },
  {
    _id: "4",
    label: "Jobs Filled in Less Than 1 Week",
    total: "80%",
    icon: <FaHourglassHalf />,
  },
];

export default function HeroSection() {

  const Card = ({ label, count,  icon }: CardProps) => {
    return (
      <div className="w-full p-5 shadow-md rounded-md flex items-center justify-between bg-app-gray-50">
        <div className="flex flex-1 flex-col justify-between">
          <p className="text-base text-app-gray-600">{label}</p>
          <span className="text-2xl font-semibold">{count}</span>
        </div>
        <div className="w-10 h-10 rounded-md flex items-center justify-center text-app-gray-0 bg-app-green-500">
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 px-6 py-8 lg:py-16 bg-hero-banner bg-center bg-cover">
      <div className="text-center text-app-gray-0">
        <h1 className="text-center font-extrabold text-4xl">Secure Connections, Real Opportunities</h1>
        <p className="text-xl font-semibold text-app-gray-50">BoulotDey connects job seekers and employers in Cameroon&apos;s petite métier sector through a trusted and secure platform. Every profile and job listing is verified, ensuring peace of mind for both workers and businesses.</p>
      </div>

      <SearchJob />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map(({ icon,  label, total }, index) => (
          <Card key={index} icon={icon}  label={label} count={total} />
        ))}
      </div>
    </div>
  )
}