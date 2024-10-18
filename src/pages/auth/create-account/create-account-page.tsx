import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createAccount } from "../api/auth.requests";
import { User } from "../../../interfaces/users";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { toast } from "sonner";
import { useAppContext } from "../../../providers/context/app-context/app-context";

const localStorage = new CLIENT_STORAGE("local");

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<Partial<User>>({
    roles: location.state?.roles || ["EMPLOYEE"],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setRefetchCurrentUser } = useAppContext();
  const [error, setError] = useState<string>("");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email || "")) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("");
    return true;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    createAccount(user)
      .then(({ data }) => {
        localStorage.save("token", data);
        navigate("/job-board");
        setRefetchCurrentUser((prev) => !prev);
        toast.success("Registration was successful ...");
      })
      .catch((err) => {
        console.error(err);
        toast.error("User already exists, please login");
      });
  };

  return (
    <div className="max-w-md mx-auto pt-20">
      <h2 className="text-4xl font-bold mb-6">Create your account</h2>
      <p className="mb-4">
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Log in
        </Link>
      </p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={onSubmit}>
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
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="input border w-full py-2 px-4 rounded-md shadow-sm"
            placeholder="Password"
            value={user?.password || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-8 text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            className="input border w-full py-2 px-4 rounded-md shadow-sm"
            placeholder="Confirm Password"
            value={user?.confirmPassword || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, confirmPassword: e.target.value }))
            }
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-8 text-gray-500"
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            type="phone"
            id="phoneNumber"
            className="input border w-full py-2 px-4 rounded-md shadow-sm"
            placeholder="6 712 013 49"
            value={user?.phoneNumber || ""}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            required
          />
        </div>

        <div className="mb-6 flex items-center">
          <input type="checkbox" className="checkbox checkbox-primary mr-2" />
          <label className="ml-2 text-sm">
            I have read and agree with your{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full py-3  text-app-gray-0 bg-text-primary"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
