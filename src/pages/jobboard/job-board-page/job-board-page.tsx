// import { useEffect, useState } from "react";
import Filter from "./filters";
import JobList from "./job-list/job-list";
// import VerificationModal from "./modals/verification-modal";
// import { useAppContext } from "../../../providers/context/app-context/app-context";
// import { useNavigate } from "react-router-dom";

export default function JobBoardPage() {
  // const [showVerificatonModal, setShowVerificatonModal] = useState(false);
  // const { currentUser } = useAppContext();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (currentUser) {
  //     if (
  //       currentUser.verificationStatus === "UNVERIFIED" ||
  //       currentUser.verificationStatus === "REJECTED"
  //     ) {
  //       setShowVerificatonModal(true);
  //     }
  //   }
  // }, [currentUser]);

  // const handleSkip = () => {
  //   setShowVerificatonModal(false);
  // };

  // const handleGetVerified = () => {
  //   setShowVerificatonModal(false);
  //   navigate("/job-board/get-verified");
  // };

  return (
    <div className="w-full p-4 flex flex-col justify-between  items-center">
      <Filter />
      <JobList />

      {/* {showVerificatonModal && (
        <VerificationModal
          onSkip={handleSkip}
          onGetVerified={handleGetVerified}
        />
      )} */}
    </div>
  );
}
