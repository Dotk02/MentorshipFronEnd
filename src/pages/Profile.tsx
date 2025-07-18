// import { useEffect } from 'react';
// import sadepix from '../assets/sadeimg.jpeg';

// function Profile() {
//   useEffect(() => {
//     console.log("Profile page loaded");
//   }, []);

//   const user = {
//     name: 'Folasade Sonde',
//     email: 'folsade@gmail.com',
//     role: 'Mentor',
//     avatar: sadepix, // ✅ correct image reference
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
//         <img
//           src={user.avatar}
//           alt="Profile"
//           className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
//         />
//         <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
//         <p className="text-gray-600 mb-2">{user.email}</p>
//         <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
//           {user.role}
//         </span>
//         <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Profile;


import { useEffect } from 'react';
import sadepix from '../assets/sadeimg.jpeg';

function Profile() {
  useEffect(() => {
    console.log("Profile page loaded");
  }, []);

  const user = {
    name: 'Folasade Sonde',
    email: 'folsade@gmail.com',
    role: 'Mentor',
    avatar: sadepix,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm text-center animate-fadeIn">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md object-cover"
        />
        <h2 className="text-2xl font-bold text-blue-900 mb-1">{user.name}</h2>
        <p className="text-gray-700 text-sm mb-2">{user.email}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1 rounded-full mb-6">
          {user.role}
        </span>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
