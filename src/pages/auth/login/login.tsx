import { useState, type FormEvent } from "react";
import { loginWithEmail } from "../api/auth.requests";
import {  useNavigate } from "react-router-dom";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { toast } from "sonner";
import { SelectRoleModal } from "../create-account/select-role-modal";

const localStorage = new CLIENT_STORAGE("local");

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal state
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return toast.warning("Input Password Or Email");
    }

    loginWithEmail(email, password)
      .then(({ data }) => {
        localStorage.save("token", data);
        toast.success("Successful login redirecting ...");
        navigate("/job-board");
      })
      .catch(() => {
        console.error("Invalid Email or Password");
        toast.error("Invalid Email or Password");
      })
      .finally(() => {
        console.log("done");
      });
  };

  return (
    <>
        <div className="max-w-md mx-auto pt-20">

          <h2 className="text-4xl font-semibold mb-6">Welcome Back!</h2>
          <p className="mb-4 text-app-gray-600">
            Don't have an account?{" "}
            <span onClick={openModal} className="text-primary hover:underline cursor-pointer">
              Create one today
            </span>
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
      {isModalOpen && <SelectRoleModal closeModal={closeModal} />}
    </>
  );
}
