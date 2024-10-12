import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type Role = "EMPLOYEE" | "EMPLOYER" | "BOTH";

interface VerificationFormProps {
  role: Role;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ role }) => {
  const { register, handleSubmit } = useForm();
  const [, setIdCardFront] = useState<File | null>(null);
  const [, setIdCardBack] = useState<File | null>(null);
  const [, setSelfie] = useState<File | null>(null);
  const [, setCompanyDocument] = useState<File | null>(null);

  const onSubmit = (data: any) => {
    console.log('Form Data: ', data);
    // Handle form submission
  };

  // Function to snap pictures (camera functionality)
  const handleSnapPicture = (setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    // Implement camera access and snapping pictures
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>First Name</label>
        <input {...register("firstName")} placeholder="First Name" className="input input-bordered" />
      </div>
      
      <div>
        <label>Last Name</label>
        <input {...register("lastName")} placeholder="Last Name" className="input input-bordered" />
      </div>

      <div>
        <label>ID Card Number</label>
        <input {...register("idCardNumber")} placeholder="ID Card Number" className="input input-bordered" />
      </div>

      <div>
        <label>Present Location</label>
        <input {...register("location")} placeholder="Present Location" className="input input-bordered" />
      </div>

      <div>
        <label>Referee's Number</label>
        <input {...register("refereeNumber")} placeholder="Referee's Number" className="input input-bordered" />
      </div>

      {role !== "EMPLOYER" && (
        <>
          <div>
            <label>Snap ID Card (Front)</label>
            <button type="button" className="btn" onClick={() => handleSnapPicture(setIdCardFront)}>
              Snap Front
            </button>
          </div>

          <div>
            <label>Snap ID Card (Back)</label>
            <button type="button" className="btn" onClick={() => handleSnapPicture(setIdCardBack)}>
              Snap Back
            </button>
          </div>

          <div>
            <label>Take a Selfie</label>
            <button type="button" className="btn" onClick={() => handleSnapPicture(setSelfie)}>
              Snap Selfie
            </button>
          </div>
        </>
      )}

      {role !== "EMPLOYEE" && (
        <>
          <div>
            <label>Company Name</label>
            <input {...register("companyName")} placeholder="Company Name" className="input input-bordered" />
          </div>

          <div>
            <label>Upload Legal Document</label>
            <input type="file" onChange={(e) => setCompanyDocument(e.target.files?.[0] || null)} className="file-input" />
          </div>
        </>
      )}

      <button type="submit" className="btn btn-primary">Submit Verification</button>
    </form>
  );
};

export default VerificationForm;
