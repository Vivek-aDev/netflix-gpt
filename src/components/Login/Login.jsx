import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import netflixBg from "../../assets/Netflix-bg.jpg";
import { checkValidData } from "../../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleButtonClick() {
    // Validate the form data

    // console.log(email.current.value);
    // console.log(password);

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
  }

  function handleToggle() {
    setIsSignIn(!isSignIn);
  }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-60 w-full max-w-md p-10 rounded-md text-white shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <div className="space-y-4">
            {!isSignIn && (
              <input
                ref={name}
                className="border border-gray-600 bg-black bg-opacity-60 text-white p-3 rounded-sm w-full focus:outline-none focus:border-red-500"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              ref={email}
              className="border border-gray-600 bg-black bg-opacity-60 text-white p-3 rounded-sm w-full focus:outline-none focus:border-red-500"
              type="text"
              placeholder="Email or mobile number"
            />
            <input
              ref={password}
              className="border border-gray-600 bg-black bg-opacity-60 text-white p-3 rounded-sm w-full focus:outline-none focus:border-red-500"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="text-red-500 font-bold text-l py-2">{errorMessage}</p>
          <button
            className="bg-red-600 hover:bg-red-700 p-3 mt-6 w-full font-semibold rounded-sm"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
            <div>
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          </div>
          <div className="mt-8 text-gray-400">
            <span>{isSignIn ? "New to Netflix?" : "Already an User"} </span>
            <button
              className="text-white hover:underline cursor-pointer"
              onClick={handleToggle}
            >
              {isSignIn ? "Sign Up now." : "Sign In."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
