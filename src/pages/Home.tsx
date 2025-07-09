

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import mentorImage from '../assets/mentor2.jpg';
// import { FaUserTie, FaClock, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// function Home() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <div className="font-sans">
//       {/* Header */}
//       <header className="bg-teal-700 text-white flex items-center justify-between px-8 py-4">
//         <h1 className="text-xl font-bold">Mentorship Platform</h1>
//         <div className="flex gap-4">
//           <Link
//             to="/profile"
//             className="bg-white text-teal-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
//           >
//             Profile
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="hover:underline"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center text-white text-center py-24 px-4"
//         style={{ backgroundImage: `url(${mentorImage})` }}
//       >
//         <h2 className="text-5xl font-bold mb-4">
//           Step into <span className="text-cyan-300">Greatness</span>
//         </h2>
//         <p className="text-lg max-w-2xl mx-auto mb-6">
//           Get matched with experienced mentors who will guide you every step of the way—whether you're just starting out or aiming to grow in your career.
//         </p>
//         <div className="flex justify-center gap-4">
//           <Link to="/find-mentor" className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-md text-white font-semibold">
//             Find a Mentor
//           </Link>
//           <Link to="/become-mentor" className="border border-white px-6 py-3 rounded-md text-white font-semibold hover:bg-white hover:text-cyan-700">
//             Become a Mentor
//           </Link>
//         </div>

//         <div className="flex justify-center gap-12 mt-10 text-xl font-semibold">
//           <div>
//             <p>120+</p>
//             <span className="text-sm font-normal">Active Mentors</span>
//           </div>
//           <div>
//             <p>600+</p>
//             <span className="text-sm font-normal">Successful Matches</span>
//           </div>
//           <div>
//             <p>45%</p>
//             <span className="text-sm font-normal">Satisfaction Rate</span>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Section */}
//       <section className="bg-white py-16 px-4 text-center">
//         <h3 className="text-3xl font-bold mb-4">What Makes Us Different.</h3>
//         <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
//           Find the support and inspiration you need to move forward with confidence..
//         </p>
//         <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-800">
//           <div className="flex flex-col items-center">
//             <FaUserTie className="text-cyan-500 text-4xl mb-2" />
//             <h4 className="font-bold text-lg mb-1">Expert Mentors</h4>
//             <p className="text-sm max-w-xs">Connect with industry experts who have walked the path you want to take.</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaClock className="text-cyan-500 text-4xl mb-2" />
//             <h4 className="font-bold text-lg mb-1">Flexible Scheduling</h4>
//             <p className="text-sm max-w-xs">Enjoy the freedom to book mentorship sessions around your availability with our flexible scheduling system.</p>
//           </div>
//           <div className="flex flex-col items-center">
//             <FaCheckCircle className="text-cyan-500 text-4xl mb-2" />
//             <h4 className="font-bold text-lg mb-1">Proven Results</h4>
//             <p className="text-sm max-w-xs">Thousands have already transformed their journeys with the help of our mentors — now it’s your turn.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-teal-700 to-blue-900 text-white py-10 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h4 className="font-bold text-lg mb-2">Mentorship Platform</h4>
//             <p className="text-sm text-white/80">
//               Helping individuals unlock their full potential by building powerful mentorship connections. Be part of a growing community of successful mentors and mentees.
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a href="#" className="hover:underline">Twitter</a>
//               <a href="#" className="hover:underline">LinkedIn</a>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-2">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/find-mentor">Find a Mentor</Link></li>
//               <li><Link to="/become-mentor">Become a Mentor</Link></li>
//               <li><Link to="/success-stories">Success Stories</Link></li>
//               <li><Link to="/resources">Resources</Link></li>
//               <li><Link to="/about">About Us</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-2">Contact Us</h4>
//             <ul className="text-sm space-y-2">
//               <li className="flex items-center gap-2"><FaEnvelope /> soderukola@gmail.com</li>
//               <li className="flex items-center gap-2"><FaPhone /> +234 813 588 0689</li>
//               <li className="flex items-center gap-2"><FaMapMarkerAlt /> Nigeria</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mentorImage from '../assets/mentor2.jpg';
import { FaUserTie, FaClock, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  // 👇 Fix: useEffect to utilize React
  useEffect(() => {
    console.log("Home page loaded");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-teal-700 text-white flex items-center justify-between px-8 py-4">
        <h1 className="text-xl font-bold">Mentorship Platform</h1>
        <div className="flex gap-4">
          <Link
            to="/profile"
            className="bg-white text-teal-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="hover:underline"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-24 px-4"
        style={{ backgroundImage: `url(${mentorImage})` }}
      >
        <h2 className="text-5xl font-bold mb-4">
          Step into <span className="text-cyan-300">Greatness</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Get matched with experienced mentors who will guide you every step of the way—whether you're just starting out or aiming to grow in your career.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/find-mentor" className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-md text-white font-semibold">
            Find a Mentor
          </Link>
          <Link to="/become-mentor" className="border border-white px-6 py-3 rounded-md text-white font-semibold hover:bg-white hover:text-cyan-700">
            Become a Mentor
          </Link>
        </div>

        <div className="flex justify-center gap-12 mt-10 text-xl font-semibold">
          <div>
            <p>120+</p>
            <span className="text-sm font-normal">Active Mentors</span>
          </div>
          <div>
            <p>600+</p>
            <span className="text-sm font-normal">Successful Matches</span>
          </div>
          <div>
            <p>45%</p>
            <span className="text-sm font-normal">Satisfaction Rate</span>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">What Makes Us Different.</h3>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Find the support and inspiration you need to move forward with confidence..
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-800">
          <div className="flex flex-col items-center">
            <FaUserTie className="text-cyan-500 text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Expert Mentors</h4>
            <p className="text-sm max-w-xs">Connect with industry experts who have walked the path you want to take.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-cyan-500 text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Flexible Scheduling</h4>
            <p className="text-sm max-w-xs">Enjoy the freedom to book mentorship sessions around your availability with our flexible scheduling system.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-cyan-500 text-4xl mb-2" />
            <h4 className="font-bold text-lg mb-1">Proven Results</h4>
            <p className="text-sm max-w-xs">Thousands have already transformed their journeys with the help of our mentors — now it’s your turn.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-teal-700 to-blue-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Mentorship Platform</h4>
            <p className="text-sm text-white/80">
              Helping individuals unlock their full potential by building powerful mentorship connections. Be part of a growing community of successful mentors and mentees.
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
