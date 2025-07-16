
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mentor from '../assets/mentor.jpg'; // Adjust if your image path is different

function BecomeMentor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    bio: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for applying!');
    navigate('/');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-4 py-3 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MentorApp</h1>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Section */}
      <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 pt-20">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white px-4 py-8 lg:px-12 shadow-lg flex items-center justify-center">
          <div className="w-full max-w-md"> {/* reduced width */}
            <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">Become a Mentor</h2>
            <p className="text-gray-600 mb-6 text-center">Share your experience and guide others.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Expertise</label>
                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Short Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <img
            src={mentor}
            alt="Mentor"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default BecomeMentor;
