import { FormEvent, useState } from "react";
import { TextLogo } from "../../../component/ui/text-logo";
import backgroundImage from "/assets/bgl.jpg";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../api/auth.requests";
import { User } from "../../../interfaces/users";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { toast } from "sonner";

const localStorage = new CLIENT_STORAGE("local")

export default function CreateAccountPage() {
  const navigate = useNavigate()
  const [user, setUser] = useState<Partial<User>>({
    role: "EMPLOYEE"
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createAccount(user)
      .then(({ data, message, status }) => {
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
    <div className="min-h-screen flex flex-col md:flex-row bg-app-gray-50">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 bg-white">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-8">
            <TextLogo />
          </div>

          <h2 className="text-4xl font-bold mb-6">Create your account</h2>
          <p className="mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-app-green-500 hover:underline">
              Log in
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="First Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="Last Name"
              />
            </div>
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
      </div>

      <div className="hidden md:flex w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>
        <div className="relative z-10 text-app-gray-0 flex flex-col justify-center items-center w-full">
          <div className="text-center max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Over 175,324 candidates waiting for good employees.</h2>
            <div className="flex justify-around mt-8">
              <div className="text-center">
                <span className="text-3xl font-bold">175,324</span>
                <p className="text-sm">Live Jobs</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold">87,354</span>
                <p className="text-sm">Companies</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold">7,532</span>
                <p className="text-sm">New Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
