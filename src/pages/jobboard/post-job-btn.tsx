import { useMemo, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppContext } from "../../providers/context/app-context/app-context";
import UpgradeRoleModal from "../landing/hero-section/upgrade-role-modal";

export default function PostJobButton() {
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
    <>
      <button className="text-white bg-primary border-2 border-primary hover:bg-accent hover:border-accent py-3 px-8 rounded-md cursor-pointer" onClick={handlePostJobClick}>Post a Job</button>
      <UpgradeRoleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      // onUpgrade={handleUpgrade} 
      />
    </>
  );
}
