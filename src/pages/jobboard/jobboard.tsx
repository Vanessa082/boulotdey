import { useEffect, useState } from "react";
import Filter from "./filters";
import JobList from "./job-list";
import VerificationModal from "./verification-modal";
import { useAppContext } from "../../providers/context/app-context/app-context";
import { useNavigate } from "react-router-dom";

export default function JobBoard() {
  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      if (currentUser.verificationStatus === "UNVERIFIED" || currentUser.verificationStatus === "REJECTED") {
        setShowModal(true);
      }
    }
  }, [currentUser]);

  const handleSkip = () => {
    setShowModal(false);
  };

  const handleGetVerified = () => {
    setShowModal(false);
    navigate("/get-verified")
  };

  return (
    <div className="w-full p-4 flex flex-col justify-between  items-center">
      <Filter />
      <JobList />
      {showModal && (
        <VerificationModal
          onSkip={handleSkip}
          onGetVerified={handleGetVerified}
        />
      )}
    </div>
  );

}