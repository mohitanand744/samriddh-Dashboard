import React from "react";
import MainButton from "../Buttons/MainButton";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen CustomLoginBg">
      {/* Form Card */}
      <div className="w-full max-w-md p-8 mx-3 text-center bg-white shadow-md rounded-xl">
        {/* Logo */}
        <div className="w-full mb-10 logo">
          <img className="mx-auto" src="/images/sLogo.png" alt="" />
        </div>

        {/* Google Login Button */}
        <button className="flex items-center justify-center w-full px-4 py-3 mb-6 text-black rounded-lg bg-blue-50 hover:bg-blue-100">
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">
            or continue with mobile number
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Mobile Number Input */}
        <div className="relative mt-10 mb-4 text-left">
          <label
            htmlFor="mobile"
            className="absolute text-sm font-medium text-gray-700 left-4 -top-[10px] bg-white"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="+91"
            className="block w-full px-3 py-3 mt-1 bg-transparent border border-gray-300 shadow-sm rounded-xl focus:outline-none sm:text-sm"
          />
        </div>

        {/* OTP Button */}
        <div className="my-10">
          <MainButton navigate={"/dashboard"} text={"Login with OTP"} />
        </div>

        {/* Sign Up Link */}
        <p className="text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>

        {/* Terms and Policies */}
        <p className="mt-6 text-xs text-gray-400">
          By logging in, you agree to the following{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
