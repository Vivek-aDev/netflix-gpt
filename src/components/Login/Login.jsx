import React from "react";
import Header from "../Header/Header";
import netflixBg from "../../assets/Netflix-bg.jpg";

const Login = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-80"
          src={netflixBg}
          alt="background-img"
        />
        <div className="bg-black opacity-70 absolute inset-0"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="relative flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-60 w-full max-w-md p-10 rounded-md text-white shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <div className="space-y-4">
            <input
              className="border border-gray-600 bg-black bg-opacity-60 text-white p-3 rounded-sm w-full focus:outline-none focus:border-red-500"
              type="text"
              placeholder="Email or mobile number"
            />
            <input
              className="border border-gray-600 bg-black bg-opacity-60 text-white p-3 rounded-sm w-full focus:outline-none focus:border-red-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="bg-red-600 hover:bg-red-700 p-3 mt-6 w-full font-semibold rounded-sm">
            Sign In
          </button>
          <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
          <div className="mt-8 text-gray-400">
            <span>New to Netflix? </span>
            <a href className="text-white hover:underline">
              Sign up now.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
