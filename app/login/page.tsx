"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("role", "admin");
      router.push("/admin");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-teal-100 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h1>

        <div className="space-y-4">
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Login
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Only authorized users can access the admin panel.
        </p>
      </div>
    </div>
  );
}
