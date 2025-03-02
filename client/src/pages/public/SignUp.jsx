import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";

const SignUp = () => {


  useLayoutEffect(() => {
    gsap.set(".form-container", { opacity: 0, y: -100 });
    gsap.to(".form-container", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  const handleFocus = (e) => {
    gsap.to(e.target, { scale: 1.05, duration: 0.3 });
  };

  const handleBlur = (e) => {
    gsap.to(e.target, { scale: 1, duration: 0.3 });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="form-container w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign Up
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-400">User Name</label>
            <input
              type="text"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none"
              placeholder="Enter your full name"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div>
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none"
              placeholder="Enter your email"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div>
            <label className="block text-gray-400">Phone Number</label>
            <input
              type="tel"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none"
              placeholder="Enter your phone number"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div>
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none"
              placeholder="Create a password"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
