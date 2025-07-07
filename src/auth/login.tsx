// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       console.log("Email:", email);
//       console.log("Password:", password);

//       // Optional: Make request to backend
//       // const response = await axios.post('http://localhost:8000/api/login', {
//       //   email,
//       //   password,
//       // });
//       // console.log(response.data);

//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="mt-10 justify-self-center mx-auto">
//       <h1 className="justify-self-center justify-center font-bold text-3xl">
//         MENTORSHIP LOGIN PAGE
//       </h1>

//       <form
//         className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg"
//         onSubmit={submit}
//       >
//         <h1 className="text-xl font-bold text-center mb-6">
//           Login Into Your Account
//         </h1>

//         <div className="mb-5">
//           <label htmlFor="email" className="block text-gray-600 mb-2">
//             Email Address
//           </label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             placeholder="Enter your Email Address"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-600 mb-2">
//             Password
//           </label>
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             placeholder="Enter your password"
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

//copy from chat gpt

import React, { useState } from 'react';
import axios from 'axios'; // Only needed if you're using axios

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Email:", email);
      console.log("Password:", password);

      // Uncomment to connect to backend
      // const response = await axios.post('http://localhost:8000/api/login', {
      //   email,
      //   password,
      // });
      // console.log(response.data);

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="justify-self-center justify-center font-bold text-3xl">
        MENTORSHIP LOGIN PAGE 
      </h1>

      <form
        className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg"
        onSubmit={submit}
      >
        <h1 className="text-xl font-bold text-center mb-6">
          Login Into Your Account
        </h1>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email Address
          </label>
          <input
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email Address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-2x1 hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;