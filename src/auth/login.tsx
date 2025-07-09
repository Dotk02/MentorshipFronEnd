
// new copie
import React, { useState } from 'react';
import axios from 'axios';
import { useShopContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  interface LoginResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const context = useShopContext();
  const backendUrl = context?.backendUrl || "";

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  try {
    const response = await axios.post<LoginResponse>(`${backendUrl}/api/auth/login`, {
      email,
      password
    });

    console.log("Full response:", response); // 👈 logs the full response

    if (response.status === 200) {
      // ✅ Store token and user in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log("Token and user saved to localStorage");

      navigate("/"); // ✅ redirect to homepage
    } else {
      setError("Login failed: Unexpected response status.");
    }
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message);
    setError("Login failed. Please check your credentials.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="justify-self-center justify-center font-bold text-3xl">
        MENTORSHIP LOGIN PAGE 
      </h1>

      <form
        className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg"
        onSubmit={submit}
      >
        <h1 className="text-xl font-bold text-center mb-6">
          Login Into Your Account
        </h1>

        {error && (
          <div className="text-red-600 text-center mb-4">
            {error}
          </div>
        )}

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email Address
          </label>
          <input
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email Address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
