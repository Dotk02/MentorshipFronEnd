import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  useEffect(() => {
    console.log("Contact Us page loaded");
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-800 text-white px-4 py-3 flex justify-between items-center shadow-md">
        <div className="text-lg font-bold">Mentorship</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>

      {/* Contact Form */}
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Contact Us</h1>
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
