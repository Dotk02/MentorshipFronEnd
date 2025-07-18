import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useShopContext } from './context';

function Register() {
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

  // Handle input field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('📤 Submitting registration form:', form);

    try {
      const response = await axios.post(
        `${backendUrl}/api/auth/register`,
        form,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // Send cookies
        }
      );

      console.log('✅ Backend responded:', response);

      if (response.status === 201) {
        alert('🎉 Registration successful! You can now log in.');
        navigate('/login');
      } else {
        console.warn('⚠️ Unexpected response:', response.status);
        setError('Unexpected response from the server.');
      }
    } catch (err: any) {
      console.error('❌ Registration error:', err.response || err.message);
      setError(
        err.response?.data?.message || 'Something went wrong during registration.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Register
        </h1>

        {/* Show error */}
        {error && (
          <div className="text-red-600 text-center mb-4 text-sm">{error}</div>
        )}

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-600 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label htmlFor="role" className="block text-sm text-gray-600 mb-1">
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

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;
