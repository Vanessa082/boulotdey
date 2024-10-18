type UserRoles = "EMPLOYEE" | "EMPLOYER" | "ADMIN";
type UserVerificationStatus =
  | "UNVERIFIED"
  | "PENDING"
  | "VERIFIED"
  | "REJECTED";
type EmployerType = "PERSONAL" | "BUSINESS" | "COMPANY";
interface User {
  _id: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  email: string;
  roles: UserRoles[];
  employerType: EmployerType[];
  password: string;
  confirmPassword: string;
  verificationStatus: UserVerificationStatus;
  idCard: string;
  idCardHoldingPhoto: string;
  registrationCertificate: string;
  taxIdentification: string;
  createdAt: string;
  updatedAt: string;
}

export type { User, UserRoles, UserVerificationStatus };
