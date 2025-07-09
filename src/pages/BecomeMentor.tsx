import React, { useState } from 'react';

function BecomeMentor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    bio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mentor Application:', formData);
    // TODO: Send to backend API
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center items-start">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Become a Mentor</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expertise" className="block text-gray-700 font-medium mb-1">Area of Expertise</label>
          <input
            type="text"
            name="expertise"
            id="expertise"
            value={formData.expertise}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            placeholder="e.g. Frontend Development, UI/UX, etc."
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="bio" className="block text-gray-700 font-medium mb-1">Short Bio</label>
          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded resize-none h-24 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Tell us a bit about yourself and how you can help"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default BecomeMentor;
