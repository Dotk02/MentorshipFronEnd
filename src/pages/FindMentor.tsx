import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import timopix from '../assets/timoimg.jpeg';
import tolupix from '../assets/tolimg.jpeg';
import ronkepix from '../assets/ronkeimg.jpeg';

function FindMentor() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("FindMentor page mounted");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { state: { from: location.pathname } }); // Save where user came from
    } else {
      setIsLoggedIn(!!token);
    }
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  const mentors = [
    {
      id: 1,
      name: 'Timothy Adeolu',
      expertise: 'Frontend Development',
      bio: 'I specialize in React and love helping beginners learn web development.',
      avatar: timopix,
    },
    {
      id: 2,
      name: 'James Adekunle',
      expertise: 'UI/UX Design',
      bio: 'Passionate about creating great user experiences using Figma and design systems.',
      avatar: ronkepix,
    },
    {
      id: 3,
      name: 'Toluwase Adekola',
      expertise: 'Data Analysis',
      bio: 'Helping mentees build skills in Excel, Python, and data visualization.',
      avatar: tolupix,
    },
  ];

  return (
    <>
      {/* Sticky Navbar */}
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
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-white">Contact Us</Link>
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

      {/* Mentor Grid */}
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Find a Mentor</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
              />
              <h2 className="text-xl font-semibold mb-1">{mentor.name}</h2>
              <p className="text-blue-700 text-sm font-medium mb-1">{mentor.expertise}</p>
              <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindMentor;
