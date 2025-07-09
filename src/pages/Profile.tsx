// import React from 'react';

// function Profile() {
 
//   const user = {
//     name: 'Jane Doe,
//     email: 'jane.doe@example.com',
//     role: 'Mentor',
//     avatar: 'https://i.pravatar.cc/150?img=5', // Placeholder image
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

import React, { useEffect } from 'react';

function Profile() {
  useEffect(() => {
    console.log("Profile page loaded");
  }, []);

  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Mentor',
    avatar: 'https://i.pravatar.cc/150?img=5', // Placeholder image
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h2 className="text-2xl font-semibold mb-1">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
          {user.role}
        </span>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
