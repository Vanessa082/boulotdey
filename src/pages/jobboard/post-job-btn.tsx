import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAppContext } from "../../providers/context/app-context/app-context";
import { UserRoles } from "../../interfaces/users";
import { updateUser } from "../user/api/api.request";
import { UpgradeRoleModal } from "../landing/hero-section/upgrade-role-modal";
export default function PostJobButton() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useAppContext();
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    actionLabel: "",
    onAction: () => {},
  });

  const userStatus = useMemo(() => {
    if (!currentUser || !currentUser.roles) {
      return { isLoggedIn: false, isEmployer: false, verificationStatus: "" };
    }
    const isEmployer = currentUser.roles.includes("EMPLOYER");
    return {
      isLoggedIn: true,
      isEmployer,
      verificationStatus: currentUser.verificationStatus,
    };
  }, [currentUser]);

  const handlePostJobClick = () => {
    if (!userStatus.isLoggedIn) {
      setModalContent({
        title: "Login Now",
        description: "You need to log in to post jobs.",
        actionLabel: "Login",
        onAction: () => navigate("/login"),
      });
      setIsModalOpen(true);
    } else if (!userStatus.isEmployer) {
      setModalContent({
        title: "Upgrade to Employer Role",
        description: "You need to upgrade to an employer account to post jobs.",
        actionLabel: "Upgrade Now",
        onAction: handleUpgrade,
      });
      setIsModalOpen(true);
    } else if (userStatus.verificationStatus === "REJECTED") {
      setModalContent({
        title: "Verification Rejected",
        description: "Your verification was rejected. Please re-verify your account.",
        actionLabel: "Get Verified",
        onAction: () => navigate("/get-verified"),
      });
      setIsModalOpen(true);
    } else if (userStatus.verificationStatus === "PENDING") {
      setModalContent({
        title: "Verification Pending",
        description: "Your verification is pending. Please wait while the administrators review it.",
        actionLabel: "OK",
        onAction: () => setIsModalOpen(false),
      });
      setIsModalOpen(true);
    } else if (userStatus.isEmployer && userStatus.verificationStatus !== "VERIFIED") {
      setModalContent({
        title: "Get Verified",
        description: "You need to verify your account to post jobs.",
        actionLabel: "Get Verified",
        onAction: () => navigate("/get-verified"),
      });
      setIsModalOpen(true);
    } else {
      navigate("/post-job");
    }
  };

  const handleUpgrade = () => {
    const newRole: UserRoles = "EMPLOYER";

    const existingRoles = currentUser?.roles ?? [];
    if (!existingRoles.includes(newRole)) {
      const updatedUser = {
        ...currentUser,
        roles: [...existingRoles, newRole],
      };

      updateUser(updatedUser)
        .then(() => {
          toast.success("Role upgraded successfully get verified!");
          navigate("/get-verified"); 
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to upgrade role.");
        });
    } else {
      toast.error("You already have the Employer role.");
    }
  };

  return (
    <>
      <button
        className="text-white bg-primary border-2 border-primary hover:bg-accent hover:border-accent py-3 px-8 rounded-md cursor-pointer"
        onClick={handlePostJobClick}
      >
        Post a Job
      </button>
      <UpgradeRoleModal
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        description={modalContent.description}
        primaryActionLabel={modalContent.actionLabel}
        onPrimaryAction={modalContent.onAction}
        isOpen={isModalOpen} 
      />
    </>
  );
}