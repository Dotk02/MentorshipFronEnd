import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-teal-700 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to="/">Mentorship</Link>
          </h1>
          <nav className="flex gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contactus" className="hover:underline font-semibold underline">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Contact Form Section */}
      <main className="flex-1 bg-gray-100 py-12 px-4">
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows= {5}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-700 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Mentorship Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
