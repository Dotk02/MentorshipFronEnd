

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useShopContext } from './context';

function SignUp() {
  const navigate = useNavigate();
  const { backendUrl } = useShopContext()!;

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  //header
  <header className="bg-blue-700 text-white p-4 shadow">
  <nav className="max-w-4xl mx-auto flex justify-between items-center">
    <h1 className="text-xl font-bold">Mentorship</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About Us</Link>
      <Link to="/contact" className="hover:underline">Contact Us</Link>
    </div>
  </nav>
</header>


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/register`,
        form,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (response.status === 201) {
        alert('🎉 Registration successful! You can now log in.');
        navigate('/login');
      } else {
        setError('Unexpected response from the server.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-teal-700 text-white py-4 shadow-md">
        <nav className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Mentorship</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </nav>
      </header>

      {/* Form Section */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
            SignUp
          </h1>

          {error && (
            <div className="text-red-600 text-center mb-4 text-sm">{error}</div>
          )}

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-1 text-gray-600">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1 text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1 text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="role" className="block text-sm mb-1 text-gray-600">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a role</option>
              <option value="mentor">Mentor</option>
              <option value="mentee">Mentee</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-teal-700 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Mentorship . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SignUp;
