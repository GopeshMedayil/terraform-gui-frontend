import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path d="M12 2a5 5 0 00-5 5v1H5a3 3 0 000 6h14a3 3 0 000-6h-2V7a5 5 0 00-5-5z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Terraform GUI
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Manage your cloud infrastructure with ease
        </p>

        {/* Email */}
        <label className="block font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <div className="relative mb-5">
          <FiMail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl px-10 py-3
               text-gray-800 placeholder-gray-400 bg-white
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               focus:outline-none"
          />
        </div>

        {/* Password */}
        <label className="block font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative mb-3">
          <FiLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-xl px-10 py-3
               text-gray-800 placeholder-gray-400 bg-white
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               focus:outline-none"
          />
          <div
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        </div>

        {/* Remember + Forgot */}
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center space-x-2 text-gray-600">
            <input type="checkbox" className="rounded" />
            <span>Remember me</span>
          </label>

          <a href="#" className="text-blue-600 text-sm font-medium">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition">
          <FiLogIn /> Sign In
        </button>
        
      </div>
    </div>
  );
}
