import { useForm } from "react-hook-form";
import { useAppContext } from "../../../providers/context/app-context/app-context";
import { User } from "../../../interfaces/users";

export default function VerificationPage() {
  const { register, handleSubmit } = useForm<User>();
  const { currentUser } = useAppContext();

  const onSubmit = (data: User) => {
    console.log("Verification data:", data);
    currentUser?.verificationStatus === "PENDING";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
      {/* {(currentUser?.roles.includes("EMPLOYEE") ||
        currentUser?.employerType?.includes("PERSONAL")) && ( */}
        <>
          <label className="block">
            Upload ID Card (or Snap ID):
            <input
              type="file"
              // {...register("idCard", { required: true })}
              className="input input-bordered"
            />
          </label>

          <label className="block">
            Upload a photo holding your ID (or Snap Photo):
            <input
              type="file"
              // {...register("idCardHoldingPhoto", { required: true })}
              className="input input-bordered"
            />
          </label>
        </>
      {/* )} */}

      {/* Business or Company employers upload business documents */}
      {/* {currentUser?.employerType?.includes("BUSINESS") ||
        (currentUser?.employerType?.includes("COMPANY") && ( */}
          <>
            <label className="block">
              Upload Business Registration Certificate:
              <input
                type="file"
                {...register("registrationCertificate", { required: true })}
                className="input input-bordered"
              />
            </label>

            <label className="block">
              Upload Tax Identification:
              <input
                type="file"
                {...register("taxIdentification", { required: true })}
                className="input input-bordered"
              />
            </label>
          </>
        {/* ))} */}

      <button type="submit" className="btn btn-primary">
        Submit Verification
      </button>

      {currentUser?.verificationStatus === "PENDING" && (
        <p>Your verification is pending admin review.</p>
      )}
    </form>
  );
}
