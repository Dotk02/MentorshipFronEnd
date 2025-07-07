//  import React from 'react'
 
//  function Home() {
//    return (
//      <div>
//        HOME PAGE
//      </div>
//    )
//  }
 
//  export default Home
 
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to the Mentorship App</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        This platform connects mentors and mentees to help grow skills, achieve goals, and build stronger futures together.
      </p>

      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;

//ANOTHER HOME PAGE CODE

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
//       {/* Navbar */}
//       <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-blue-700">MentorshipApp</h1>
//           <nav className="space-x-6">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
//             <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Login</Link>
//             <Link to="/register" className="text-gray-700 hover:text-blue-600 transition">Register</Link>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-center text-center px-4 py-32">
//         <h2 className="text-5xl font-extrabold text-blue-700 leading-tight mb-4">
//           Empowering Growth Through Mentorship
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mb-8">
//           Find the right mentor, build valuable connections, and grow in your career, education, or life journey.
//         </p>
//         <div className="space-x-4">
//           <Link
//             to="/login"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition"
//           >
//             Get Started
//           </Link>
//           <Link
//             to="/register"
//             className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md text-lg transition"
//           >
//             Join Now
//           </Link>
//         </div>
//       </div>

//       {/* Features Section */}
//       <section className="py-16 px-4 bg-white">
//         <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
//           <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">Expert Mentors</h4>
//             <p className="text-gray-600">Work with top-tier mentors across different fields and industries.</p>
//           </div>
//           <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">Goal-Focused Guidance</h4>
//             <p className="text-gray-600">Stay focused and track your progress with goal-setting tools.</p>
//           </div>
//           <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">Community Support</h4>
//             <p className="text-gray-600">Join a community that motivates and encourages you to grow.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500 text-sm border-t">
//         © {new Date().getFullYear()} MentorshipApp. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Home;
   