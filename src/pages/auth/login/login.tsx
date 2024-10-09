import { useState } from "react";
import { loginWithEmail } from "../api/auth.requests";
import { useNavigate } from "react-router-dom";
import { CLIENT_STORAGE } from "@orashus/client-storage";
import { toast } from "sonner";
import { SelectRoleModal } from "../create-account/select-role-modal";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppContext } from "../../../providers/context/app-context/app-context";

const localStorage = new CLIENT_STORAGE("local");

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const navigate = useNavigate();
  const {setRefetchCurrentUser} = useAppContext()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onSubmit = async (data: { email: string; password: string }) => {
    loginWithEmail(data.email, data.password)
      .then(({ data }) => {
        localStorage.save("token", data);
        toast.success("Successful login redirecting ...");
        setRefetchCurrentUser((prev) => !prev);
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
          <span
            onClick={openModal}
            className="text-primary hover:underline cursor-pointer"
          >
            Create one today
          </span>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email Address
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="email"
                  className={`input input-bordered w-full px-4 py-2 border border-app-gray-300 rounded-lg focus:outline-none focus:border-primary ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your email"
                  {...field}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className={`input input-bordered w-full px-4 py-2 border border-app-gray-300 rounded-lg focus:outline-none focus:border-primary ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                  {...field}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-8 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
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

          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-app-gray-0 text-lg rounded-lg shadow-lg hover:bg-primary-dark transition"
          >
            Sign in
          </button>
        </form>
      </div>
      {isModalOpen && <SelectRoleModal closeModal={closeModal} />}
    </>
  );
}
