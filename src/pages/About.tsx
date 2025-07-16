
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function About() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    console.log("About page mounted");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-teal-700 text-white sticky top-0 z-50 shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold">
            <Link to="/">Mentorship</Link>
          </h1>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none text-2xl"
          >
            ☰
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-teal-700 px-3 py-1 rounded font-semibold hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-white text-teal-700 px-3 py-1 rounded font-semibold hover:bg-gray-100"
              >
                Login
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Link to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left bg-white text-teal-700 px-3 py-1 rounded font-semibold hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block bg-white text-teal-700 px-3 py-1 rounded font-semibold hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </header>

      {/* About Content */}
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About Us</h1>

          <section className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Our platform is committed to building strong mentorship connections that empower individuals to grow, learn, and succeed.
              We believe in the power of community and knowledge-sharing to inspire the next generation of leaders.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h3>
              <p className="text-gray-600">
                To connect mentors and mentees in meaningful ways that foster personal and professional development.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted platform for mentorship, inspiring transformation across all industries and backgrounds.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Values</h3>
              <p className="text-gray-600">
                Integrity, commitment, empathy, and the belief that everyone has something valuable to give and learn.
              </p>
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Meet the Team</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Behind this platform is a passionate team of developers, mentors, and dreamers dedicated to creating opportunities for growth.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: 'Kolawole Soderu', role: 'Founder & Lead Developer', avatar: 'https://i.pravatar.cc/150?img=33' },
                { name: 'Grace Adeola', role: 'Mentorship Coordinator', avatar: 'https://i.pravatar.cc/150?img=45' },
                { name: 'Emeka Obi', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=12' },
              ].map((member, i) => (
                <div key={i} className="w-48 text-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-blue-400 shadow-md"
                  />
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;

