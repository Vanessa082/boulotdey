import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../../interfaces/users";

interface SelectRoleModalProps {
  closeModal: () => void;
}

export function SelectRoleModal({ closeModal }: SelectRoleModalProps) {
  const [, setUser] = useState<Partial<User>>({
    roles: ["EMPLOYEE"],
  });
  const navigate = useNavigate();

  const handleRoleSelection = (roles: User["roles"]) => {
    setUser((prevUser) => ({ ...prevUser, roles }));
    navigate("/create-account", { state: { roles } });
    closeModal();
  };

  return (
    <div
      className="w-full fixed inset-0 z-10 bg-gray-800 bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-app-gray-0 rounded-md p-5 text-center w-[80%] max-w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="text-gray-600 absolute right-5 top-5 text-sm cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </span>
        <h2 className="text-lg mb-4">Who are You?</h2>
        <button
          type="button"
          className="bg-primary text-app-gray-0 cursor-pointer px-3 py-2 mb-2 w-full"
          onClick={() => handleRoleSelection(["EMPLOYEE"])}
        >
          Employee
        </button>
        <button
          type="button"
          className="bg-primary text-app-gray-0 cursor-pointer px-3 py-2 w-full"
          onClick={() => handleRoleSelection(["EMPLOYER"])}
        >
          Employer
        </button>
      </form>
    </div>
  );
}
