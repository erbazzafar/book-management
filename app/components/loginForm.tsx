"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const LoginForm: React.FC = () => {
  const router = useRouter(); // Initialize router

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Login Data:", loginData);
    console.log("Login successful!");

    // Redirect to Home page
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 space-y-3 text-white bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-lg font-semibold text-center">Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
