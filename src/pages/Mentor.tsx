
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Mentor() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <>
      {/* Sticky Top Navbar */}
      <header className="bg-blue-800 text-white sticky top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold">
            <Link to="/">Mentorship</Link>
          </h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contactus" className="hover:underline">Contact</Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
              >
                Login
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-white">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-white">About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-white">Contact</Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-200"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </header>

      {/* Mentor Page Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-10 max-w-xl w-full text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">🎉 Welcome, Mentor!</h1>
          <p className="text-gray-700 text-lg mb-6">
            Thank you for signing up to guide and empower others through mentorship. You’re now part of a life-changing movement!
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              to="/home"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Go to Dashboard
            </Link>
            <Link
              to="/find-mentor"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50 transition"
            >
              Explore Mentors
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentor;
