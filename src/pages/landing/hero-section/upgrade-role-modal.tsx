import { updateUser } from "../../user/api/api.request";
import { UserRoles } from "../../../interfaces/users";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../providers/context/app-context/app-context";

interface UpgradeRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function UpgradeRoleModal({ isOpen, onClose }: UpgradeRoleModalProps) {
  const navigate = useNavigate();
  const { currentUser } = useAppContext();

  if (!isOpen) return null;

  const handleUpgrade = () => {
    const newRole: UserRoles = "EMPLOYER";

    const existingRoles = currentUser?.roles ?? [];
    if (!existingRoles.includes(newRole)) {
      const updatedUser = {
        ...currentUser,
        roles: [...existingRoles, newRole]
      };

      updateUser(updatedUser)
        .then(({ data }) => {
          console.log(data)
          toast.success("Role upgraded successfully!");
          navigate("/post-job")
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
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg text-black">Upgrade to Employer Role</h2>
        <p className="py-4 text-black">You need to upgrade to an employer account to post jobs.</p>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleUpgrade}>
            Upgrade Now
          </button>
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
