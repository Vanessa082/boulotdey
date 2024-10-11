import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../../providers/context/app-context/app-context";
import { toast } from "sonner";
import UpgradeRoleModal from "./upgrade-role-modal";
import PostJobButton from "../../jobboard/post-job-btn";

export default function HeroSection() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useAppContext();

  const userCanPostJob = useMemo(() => {
    if (!currentUser || !currentUser.roles) {
      toast.message("No accounts please login");
      return { isEmployer: false, hasMultipleRoles: false };
    }

    const isEmployer = currentUser.roles.includes("EMPLOYER");
    return { isEmployer };
  }, [currentUser]);

  const handlePostJobClick = () => {
    if (!currentUser) {
      toast.error("You need to log in to post a job.");
      return navigate("/login");
    }

    const { isEmployer } = userCanPostJob;

    if (!isEmployer) {
      setIsModalOpen(true);
      return;
    }

    navigate("/post-job");
  };
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center px-6 bg-hero-banner bg-center bg-cover">
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row justify-between items-center bg-accent bg-opacity-70 text-white font-bold">
        <div className="md:w-full  flex flex-col justify-between gap-4 lg:text-left p-8 rounded-lg">
          <h2 className="text-4xl md:text-5xl">Employees</h2>
          <p className=" ">
            Discover real opportunities in Cameroon&apos;s petite métier sector. BoulotDey connects job seekers with trusted employer.
          </p>
          <div className="lg:flex lg:items-center lg:gap-4">
            <Link to="/job-board">
              <button className="bg-primary border-2 border-primary hover:bg-accent hover:border-accent py-3 px-8 rounded-md cursor-pointer ">Find a Job</button>
            </Link>
            <Link to="/job-board">
              <button className="hidden lg:block bg-transparent border-2 border-app-gray-0 hover:bg-white hover:text-primary py-3 px-8 rounded-md cursor-pointer">Boulot dey</button>
            </Link>
          </div>
        </div>

        <svg width="4" height="240" viewBox="0 0 4 740" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block ">
          <path d="M2 737.2V2.79996" stroke="white" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" />
        </svg>

        <div className="md:w-full flex flex-col justify-between gap-4 lg:text-left p-8 rounded-lg">
          <h2 className="text-4xl md:text-5xl">Employers</h2>
          <p className="s">
            Publish to advertise your jobs. Receive applications at your preferred destination. BoulotDey provides a verified platform ensuring trust and security.
          </p>

          <div className="lg:flex lg:items-center lg:gap-4">
            <PostJobButton />
            <button className="bg-transparent hidden lg:flex border-2 border-white hover:bg-white hover:text-primary py-3 px-8 rounded-md cursor-pointer">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
