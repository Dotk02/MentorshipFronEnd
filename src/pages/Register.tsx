

// // import React, { useState } from 'react';

// // const Register: React.FC = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: '',
// //   });

// //   const [message, setMessage] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage('');

// //     try {
// //       const response = await fetch('http://localhost:5000/api/register', {
// //   method: 'POST',
// //   headers: {
// //     'Content-Type': 'application/json',
// //   },
// //   credentials: 'include', // 🔥 this is important
// //   body: JSON.stringify(formData),
// // });

// //       // const response = await fetch('http://localhost:5000/api/register', {
// //       //   method: 'POST',
// //       //   headers: {
// //       //     'Content-Type': 'application/json',
// //       //   },
// //       //   body: JSON.stringify(formData),
// //       // });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || 'Registration failed');
// //       }

// //       setMessage('Registration successful!');
// //       setFormData({ name: '', email: '', password: '', role: '' });
// //     } catch (error: any) {
// //       setMessage(error.message || 'Something went wrong');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
// //       >
// //         <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">Register</h2>

// //         {message && (
// //           <div className="mb-4 text-center text-sm text-red-500">{message}</div>
// //         )}

// //         <div className="mb-4">
// //           <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             id="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
// //             placeholder="Enter your name"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             id="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
// //             placeholder="Enter your email"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             id="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
// //             placeholder="Enter your password"
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label htmlFor="role" className="block text-gray-700 mb-1">Role</label>
// //           <select
// //             name="role"
// //             id="role"
// //             value={formData.role}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
// //           >
// //             <option value="">Select role</option>
// //             <option value="mentor">Mentor</option>
// //             <option value="mentee">Mentee</option>
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
// //         >
// //           {loading ? 'Registering...' : 'Register'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useShopContext } from '../context';

// function Register() {
//   const navigate = useNavigate();
//   const { backendUrl } = useShopContext()!;

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.post(`${backendUrl}/api/auth/register`, form, {
//         headers: { 'Content-Type': 'application/json' }
//       });

//       console.log('✅ Registered:', response.data);

//       navigate('/login'); // redirect after successful registration
//     } catch (err: any) {
//       console.error('❌ Registration failed:', err);
//       setError(err.response?.data?.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
//           Register
//         </h1>

//         {error && <div className="text-red-600 text-center mb-4">{error}</div>}

//         <input
//           name="name"
//           type="text"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-md"
//           required
//         />

//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-md"
//           required
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full mb-6 px-4 py-2 border rounded-md"
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded-md"
//         >
//           {loading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useShopContext } from '../context';

function Register() {
  const navigate = useNavigate();
  const { backendUrl } = useShopContext()!;

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('📤 Submitting data to:', `${backendUrl}/api/auth/register`);
    console.log('📄 Form data:', form);

    try {
      const response = await axios.post(`${backendUrl}/api/auth/register`, form, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('✅ Registration successful:', response.data);
      alert('Registration successful! You can now login.');

      navigate('/login');
    } catch (err: any) {
      console.error('❌ Registration error:', err.response || err.message);
      setError(err.response?.data?.message || 'Something went wrong during registration.');
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

        {error && <div className="text-red-600 text-center mb-4">{error}</div>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
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
