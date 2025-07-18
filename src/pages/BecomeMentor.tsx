

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BecomeMentor() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      // Redirect with state for after-login redirection
      navigate('/login', { state: { from: '/become-mentor' } });
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    bio: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    alert('Thank you for applying!');
    navigate('/');
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-teal-700 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to="/">Mentorship</Link>
          </h1>
          <nav className="flex gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contactus" className="hover:underline">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Form Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-16">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
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
                rows={4}
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

      {/* Footer */}
      <footer className="bg-teal-700 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Mentorship Platform. All rights reserved.</p>
      </footer>
    </>
  );
}

export default BecomeMentor;

