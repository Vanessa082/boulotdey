import { useState } from "react";
import { TextLogo } from "../../../component/ui/text-logo";
import backgroundImage from "/assets/bgl.jpg";
import { Link } from "react-router-dom";

export default function CreateAccountPage() {
  const [role, setRole] = useState("employee"); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

          <div className="mb-6">
            <label className="mr-4 font-medium">Create Account as:</label>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="employee"
                  className="form-radio text-app-green-500"
                  checked={role === "employee"}
                  onChange={() => setRole("employee")}
                />
                <span className="ml-2">Employee</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="employer"
                  className="form-radio text-app-green-500"
                  checked={role === "employer"}
                  onChange={() => setRole("employer")}
                />
                <span className="ml-2">Employer</span>
              </label>
            </div>
          </div>

          <form>
            {role === "employee" ? (
              <>
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
              </>
            ) : (
              <div className="mb-4">
                <label htmlFor="businessName" className="block text-sm font-medium">
                  Business/Company Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  className="input border w-full py-2 px-4 rounded-md shadow-sm"
                  placeholder="Business or Company Name"
                />
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="password"
                id="phone Number"
                className="input border w-full py-2 px-4 rounded-md shadow-sm"
                placeholder="6 712 013 49"
              />
            </div>

            <div className="mb-6 flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-app-green-500" />
              <label className="ml-2 text-sm">
                I have read and agree with your{" "}
                <a href="#" className="text-app-green-500 hover:underline">Terms of Service</a>
              </label>
            </div>

            <button className="btn btn-primary w-full py-3  text-app-gray-0 bg-text-app-green-500 hover:bg-app-green-800">
              Create Account
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 relative">
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
