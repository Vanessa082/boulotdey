import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createAccount } from "../api/auth.requests";
import { User } from "../../../interfaces/users";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { toast } from "sonner";
import * as yup from "yup";

const localStorage = new CLIENT_STORAGE("local");
 const schama = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], "password must match").required("Please confirm password"),
  phoneNumber:yup.string().matches(/^6\d{8}$/, "Phone number must start with 6 and must be 9 digits").required("Phone Number is required")
 })

export default function CreateAccountPage() {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  const [user, setUser] = useState<Partial<User>>({
    role: location.state?.role || "EMPLOYEE"
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createAccount(user)
      .then(({ data }) => {
        localStorage.save("token", data);
        toast.success("Registration was successful ...");
        navigate("/job-board")
      })
      .catch(() => {
        console.error;
        toast.error("User already exists, please login")
      })
  }

  return (
        <div className="max-w-md mx-auto pt-20">

          <h2 className="text-4xl font-bold mb-6">Create your account</h2>
          <p className="mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-app-green-500 hover:underline">
              Log in
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="Email address"
                value={user?.email || ""}
                onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="Password"
                value={user?.password || ""}
                onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
               Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="Confirm Password"
                value={user?.confirmPassword || ""}
                onChange={(e) => setUser((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="phoneNumber"
                id="phone Number"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="6 712 013 49"
                value={user?.phoneNumber || ""}
                onChange={(e) => setUser((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                required
              />
            </div>

            <div className="mb-6 flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-app-green-500" />
              <label className="ml-2 text-sm">
                I have read and agree with your{" "}
                <a href="#" className="text-app-green-500 hover:underline">Terms of Service</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full py-3  text-app-gray-0 bg-text-app-green-500 hover:bg-app-green-800">
              Create Account
            </button>
          </form>
        </div>
  );
}
