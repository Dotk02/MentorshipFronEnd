
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mentorImage from '../assets/mentor2.jpg';
import {
  FaUserTie,
  FaClock,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log('Home page loaded');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-teal-700 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold">
            <Link to="/">Mentorship</Link>
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contactus" className="hover:underline">Contact Us</Link>
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="bg-white text-teal-700 px-3 py-1 rounded hover:bg-gray-100"
              >
                Logout
              </button>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-teal-800">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block">About Us</Link>
            <Link to="/contactus" onClick={() => setMenuOpen(false)} className="block">Contact Us</Link>
            {isLoggedIn && (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block w-full text-left bg-white text-teal-700 px-3 py-1 rounded"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        className="bg-cover bg-center text-white text-center py-60 px-8"
        style={{ backgroundImage: `url(${mentorImage})` }}
      >
        <h2 className="text-5xl font-bold mb-4">
          Step into <span className="text-cyan-300">Greatness</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Get matched with experienced mentors who will guide you every step of the way.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/find-mentor"
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-md text-white font-semibold"
          >
            Find a Mentor
          </Link>
          <Link
            to="/become-mentor"
            className="border border-white px-6 py-3 rounded-md text-white font-semibold hover:bg-white hover:text-cyan-700"
          >
            Become a Mentor
          </Link>
        </div>
      </section>

      {/* 👇 Login & Signup section */}
      {!isLoggedIn && (
        <section className="bg-gray-100 py-10 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to start your journey?</h3>
          <p className="mb-6 text-gray-700">Sign up now or log in to get started.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/signup"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-white text-teal-600 border border-teal-600 hover:bg-teal-50 px-6 py-3 rounded-md font-medium"
            >
              Login
            </Link>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">What Makes Us Different.</h3>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Find the support and inspiration you need to move forward with confidence.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-800">
          <div className="flex flex-col items-center">
            <FaUserTie className="text-cyan-500 text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Expert Mentors</h4>
            <p className="text-sm max-w-xs">Industry experts ready to guide you.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-cyan-500 text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Flexible Scheduling</h4>
            <p className="text-sm max-w-xs">Book mentorship sessions that work for you.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-cyan-500 text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Proven Results</h4>
            <p className="text-sm max-w-xs">Join thousands who’ve transformed their journeys.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-teal-700 to-blue-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Mentorship Platform</h4>
            <p className="text-sm text-white/80">
              Helping individuals unlock their full potential by building powerful mentorship connections.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/find-mentor">Find a Mentor</Link></li>
              <li><Link to="/become-mentor">Become a Mentor</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2"><FaEnvelope /> soderukola@gmail.com</li>
              <li className="flex items-center gap-2"><FaPhone /> +234 813 588 0689</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> Nigeria</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
