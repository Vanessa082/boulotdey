type UserRoles = "EMPLOYEE" | "EMPLOYER" | "ADMIN";
type UserVerificationStatus = "UNVERIFIED" | "PENDING" | "VERIFIED" | "REJECTED";
interface User {
  _id: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  email: string;
  roles: UserRoles[];
  password: string;
  confirmPassword: string;
  verificationStatus: UserVerificationStatus;
  createdAt: string;
  updatedAt: string;
}

export type { User, UserRoles, UserVerificationStatus };
