type UserRoles = "EMPLOYEE" | "EMPLOYER" | "ADMIN";

interface User {
  _id: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  email: string;
  role: UserRoles;
  password: string;
  confirmPassword: string;
  createdAt: string;
  updatedAt: string;
}

export type { User, UserRoles };
