import { useEffect, useState } from "react";
import { gsap } from "gsap";
import axios from "axios";

const SignIn = () => {
  

  useEffect(() => {
    gsap.fromTo(
      ".sign-in-form",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="sign-in-form w-full max-w-md p-6 bg-gray-800 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Sign In
        </h2>

        <form className="space-y-4" >
          <div>
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
