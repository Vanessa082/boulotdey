import { TextLogo } from "../../component/ui/text-logo";
import backgroundImage from "../../../public/assets/bgl.jpg";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Sign In Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 bg-white">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <TextLogo className="text-app-gray-900" />
          </div>

          <h2 className="text-3xl font-bold mb-6">Sign in</h2>
          <p className="mb-4">
            Don't have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Create Account
            </a>
          </p>

          <form>
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

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mr-2"
                />
                Remember me
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-primary w-full mb-4">Sign in</button>
          </form>
        </div>
      </div>

      {/* Right Side: Background Image with Overlay */}
      <div className="hidden md:flex w-1/2 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-app-green-900 bg-opacity-50"></div>

        {/* Content on top of the overlay */}
        <div className="relative z-10 text-white flex flex-col justify-center items-center w-full">
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
