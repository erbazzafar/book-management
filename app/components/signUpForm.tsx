import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Router } from "lucide-react";

const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page refresh

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.password ||
      !formData.confirm_password
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form Data:", formData);
    console.log("Form submitted successfully!");
    router.push("/log-in");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding field
    });
  };

  return (
    
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 space-y-3 text-white bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-lg font-semibold text-center">Sign Up</h2>

        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          placeholder="Re-enter password"
          className="rounded-lg p-2 bg-gray-700 text-white border border-gray-600"
        />

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </p>

      </form>
    </div>
  );
};

export default SignUpForm;
