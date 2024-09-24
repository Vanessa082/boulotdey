import { useState } from "react";
import { TextLogo } from "../../component/ui/text-logo";
import backgroundImage from "../../../public/assets/bgl.jpg";
import { Link } from "react-router-dom";

export default function Registration() {
  const [role, setRole] = useState("employee"); 

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 bg-app-gray-0">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-8">
            <TextLogo />
          </div>

          <h2 className="text-3xl font-bold mb-6">Create account.</h2>
          <p className="mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>

          <div className="mb-6">
            <label className="mr-4 font-medium">Register as:</label>
            <div className="flex space-x-4 ">
              <label className="cursor-pointer items-center">
                <input
                  type="radio"
                  name="role"
                  value="employee"
                  className="radio checked:bg-primary"
                  checked={role === "employee"}
                  onChange={() => setRole("employee")}
                />
                <span className="ml-2">Employee</span>
              </label>
              <label className="cursor-pointer items-center">
                <input
                  type="radio"
                  name="role"
                  value="employer"
                  className="radio checked:bg-primary"
                  checked={role === "employer"}
                  onChange={() => setRole("employer")}
                />
                <span className="ml-2">Employer</span>
              </label>
            </div>
          </div>

          <form>
            <div className="mb-4">
              {role === "employee" ? (
                <>
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="input input-bordered w-full"
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
                      className="input input-bordered w-full"
                      placeholder="Last Name"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="businessName" className="block text-sm font-medium">
                      Business/Company Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      className="input input-bordered w-full"
                      placeholder="Business or Company Name"
                    />
                  </div>
                </>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="input input-bordered w-full"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="checkbox checkbox-primary mr-2" />
                I have read and agree with your{" "}
                <a href="#" className="text-primary hover:underline ml-1">
                  Terms of Service
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-full mb-4">
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

        <div className="absolute inset-0 bg-app-green-900 bg-opacity-50"></div>

        <div className="relative z-10 text-app-gray-0 flex flex-col justify-center items-center w-full">
          <div className="text-center max-w-lg">
            <h2 className="text-4xl font-bold mb-4">
              Over 1,75,324 candidates waiting for good employees.
            </h2>
            <div className="flex justify-around mt-8">
              <div className="text-center">
                <span className="text-3xl font-bold">1,75,324</span>
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
