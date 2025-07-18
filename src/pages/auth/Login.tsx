// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useShopContext } from '../context'; // ✅ Adjust to your actual path

// // // function Login() {
// // //   const navigate = useNavigate();
// // //   const context = useShopContext();

  

// // //   // Make sure backendUrl is correctly set in your context
// // //   const backendUrl = context?.backendUrl || "https://https://mentorshipapp-1.onrender.com";

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState("");

// // //   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();
// // //     setIsLoading(true);
// // //     setError("");

// // //     try {
// // //       const response = await axios.post(
// // //         `${backendUrl}/api/auth/login`,
// // //         { email, password },
// // //         {
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //         }
// // //       );

// // //       console.log("✅ Login successful:", response.data);

// // //       // Save token and user to localStorage
// // //       localStorage.setItem("token", response.data.token);
// // //       localStorage.setItem("user", JSON.stringify(response.data.user));

// // //       // Redirect to home page
// // //       navigate("/home");
// // //     } catch (err: any) {
// // //       console.error(" Login error:", err);

// // //       if (err.response?.status === 401) {
// // //         setError("Invalid email or password.");
// // //       } else if (err.response?.data?.message) {
// // //         setError(err.response.data.message);
// // //       } else {
// // //         setError("Login failed. Please try again.");
// // //       }
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
// // //       <form
// // //         onSubmit={submit}
// // //         className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
// // //       >
// // //         <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
// // //           Mentorship Login
// // //         </h1>

// // //         {error && (
// // //           <div className="text-red-600 text-center mb-4 font-medium">{error}</div>
// // //         )}

// // //         <div className="mb-4">
// // //           <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
// // //             Email
// // //           </label>
// // //           <input
// // //             id="email"
// // //             type="email"
// // //             value={email}
// // //             required
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             placeholder="Enter your email"
// // //           />
// // //         </div>

// // //         <div className="mb-6">
// // //           <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
// // //             Password
// // //           </label>
// // //           <input
// // //             id="password"
// // //             type="password"
// // //             value={password}
// // //             required
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             placeholder="Enter your password"
// // //           />
// // //         </div>

// // //         <button
// // //           type="submit"
// // //           disabled={isLoading}
// // //           className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
// // //         >
// // //           {isLoading ? "Logging in..." : "Login"}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useShopContext } from '../context'; // ✅ Adjust if needed

// // function Login() {
// //   const navigate = useNavigate();
// //   const context = useShopContext();

// //   const backendUrl = context?.backendUrl || "https://mentorshipapp-1.onrender.com";

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError("");

// //     try {
// //       const response = await axios.post(
// //         `${backendUrl}/api/auth/login`,
// //         { email, password },
// //         {
// //           headers: { 'Content-Type': 'application/json' },
// //         }
// //       );

// //       console.log("✅ Login successful:", response.data);
      

// //       // i want a lead from ind amento
// // // After successful login
// // localStorage.setItem("user", JSON.stringify(response.data.user)); // or token, if you prefer



// //       localStorage.setItem("token", response.data.token);
// //       localStorage.setItem("user", JSON.stringify(response.data.user));

// //       navigate("/home");
// //     } catch (err: any) {
// //       console.error("Login error:", err);
// //       if (err.response?.status === 401) {
// //         setError("Invalid email or password.");
// //       } else if (err.response?.data?.message) {
// //         setError(err.response.data.message);
// //       } else {
// //         setError("Login failed. Please try again.");
// //       }
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* Navbar */}
// //        <header className="bg-teal-700 text-white py-4 shadow-md">
// //         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
// //           <h1 className="text-xl font-bold">
// //             <Link to="/">Mentorship</Link>
// //           </h1>
// //           <nav className="flex gap-6">
// //             <Link to="/" className="hover:underline">Home</Link>
// //             <Link to="/about" className="hover:underline">About Us</Link>
// //             <Link to="/contactus" className="hover:underline font-semibold underline">Contact Us</Link>
// //           </nav>
// //         </div>
// //       </header>

// //       {/* ✅ Login Form */}
// //       <div className="flex items-center justify-center px-4 py-10">
// //         <form
// //           onSubmit={submit}
// //           className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
// //         >
// //           <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
// //             Mentorship Login
// //           </h1>

// //           {error && (
// //             <div className="text-red-600 text-center mb-4 font-medium">{error}</div>
// //           )}

// //           <div className="mb-4">
// //             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               value={email}
// //               required
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               placeholder="Enter your email"
// //             />
// //           </div>

// //           <div className="mb-6">
// //             <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
// //               Password
// //             </label>
// //             <input
// //               id="password"
// //               type="password"
// //               value={password}
// //               required
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               placeholder="Enter your password"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={isLoading}
// //             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
// //           >
// //             {isLoading ? "Logging in..." : "Login"}
// //           </button>
// //         </form>
// //       </div>

// //       {/* Footer */}
// //       <footer className="bg-teal-700 text-white text-center py-4">
// //         <p>&copy; {new Date().getFullYear()} Mentorship Platform. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { useShopContext } from '../context';
// //DOTKUODATE
// import { useLocation } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const context = useShopContext();

// //DOTK UPDATE
// const location = useLocation();

//   const backendUrl = context?.backendUrl || "https://mentorshipapp-1.onrender.com";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/auth/login`,
//         { email, password },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       console.log("✅ Login successful:", response.data);


//       //DOTK UODA
//       try {
//     // Do your login API call here...
//     const token = "some_token_from_api"; // Replace with actual logic
//     localStorage.setItem("token", token);

//     const redirectPath = location.state?.from || '/'; // Redirect back or to home
//     navigate(redirectPath); // After login, go back to FindMentor if that's where user came from

//   } catch (error) {
//     console.error("Login failed", error);
//   }
// };


//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.user));

//       navigate("/home");
//     } catch (err: any) {
//       console.error("Login error:", err);
//       if (err.response?.status === 401) {
//         setError("Invalid email or password.");
//       } else if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <header className="bg-teal-700 text-white py-4 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold">
//             <Link to="/">Mentorship</Link>
//           </h1>
//           <nav className="flex gap-6">
//             <Link to="/" className="hover:underline">Home</Link>
//             <Link to="/about" className="hover:underline">About Us</Link>
//             <Link to="/contactus" className="hover:underline font-semibold underline">Contact Us</Link>
//           </nav>
//         </div>
//       </header>

//       {/* ✅ Login Form */}
//       <div className="flex items-center justify-center px-4 py-10">
//         <form
//           onSubmit={submit}
//           className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
//         >
//           <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
//             Mentorship Login
//           </h1>

//           {error && (
//             <div className="text-red-600 text-center mb-4 font-medium">
//               {error}
//             </div>
//           )}

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             {isLoading ? "Logging in..." : "Login"}
//           </button>

//           {/* ✅ Sign Up Link */}
//           <div className="mt-4 text-center text-sm text-gray-700">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-blue-600 hover:underline font-medium">
//               Sign up
//             </Link>
//           </div>
//         </form>
//       </div>

//       {/* Footer */}
//       <footer className="bg-teal-700 text-white text-center py-4">
//         <p>&copy; {new Date().getFullYear()} Mentorship Platform. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Login;


// import { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//     try {
//       const response = await axios.post("https://mentorshipapp-1.onrender.com/api/auth/login", {
//         email,
//         password
//       });

//       const token = response.data.token;
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(response.data.user)); // optional

//       const redirectPath = location.state?.from || '/';
//       navigate(redirectPath);
//     } catch (error) {
//       console.error("Login failed", error);
//       setErrorMessage("Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//         {errorMessage && (
//           <p className="text-red-500 text-center mb-4">{errorMessage}</p>
//         )}

//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://mentorshipapp-1.onrender.com/api/auth/login", {
        email,
        password
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data.user)); // optional

      const redirectPath = location.state?.from || '/';
      navigate(redirectPath);
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
