import { useState, type FormEvent } from "react";

import { TextLogo } from "../../../component/ui/text-logo";
import { loginWithEmail } from "../api/auth.requests";
import backgroundImage from "/assets/bgl.jpg";
import { Link, useNavigate } from "react-router-dom";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { toast } from "sonner";

const localStorage = new CLIENT_STORAGE("local");

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return toast.warning("Input Password Or Email");
    }

    loginWithEmail(email, password)
      .then(({ data, message, status }) => {
        localStorage.save("token", data);
        toast.success("Successful login redirecting ...");
        navigate("/job-board")

      })
      .catch(() => {
        console.error("Invalid Email or Password");
        toast.error("Invalid Email or Password")
      })
      .finally(() => {
        console.log("done");
      });
  }

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 bg-app-gray-0">
        <div className="max-w-md mx-auto">
          <div className="flex justify-center mb-8">
            <TextLogo className="text-app-gray-900" />
          </div>

          <h2 className="text-4xl font-semibold mb-6">Welcome Back!</h2>
          <p className="mb-4 text-app-gray-600">
            Don't have an account?{" "}
            <Link to="/create-account" className="text-primary hover:underline">
              Create one today
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full px-4 py-2 border border-app-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input input-bordered w-full px-4 py-2 border border-app-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mr-2"
                />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary w-full py-3 text-app-gray-0 text-lg rounded-lg shadow-lg hover:bg-primary-dark transition">
              Sign in 
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
            <h2 className="text-5xl font-bold mb-4">
              Over 175,324 candidates waiting for you!
            </h2>
            <div className="flex justify-around mt-8">
              <div className="text-center">
                <span className="text-4xl font-bold">175,324</span>
                <p className="text-lg">Live Jobs</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold">87,354</span>
                <p className="text-lg">Companies</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold">7,532</span>
                <p className="text-lg">New Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
