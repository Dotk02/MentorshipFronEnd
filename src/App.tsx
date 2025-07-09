// // // App.tsx
// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom'; // ✅ NO BrowserRouter here
// // import Register from './pages/Register';
// // import Login from './pages/auth/Login';
// // import Profile from './pages/Profile';
// // import Resources from './pages/Resources';
// // import SuccessStories from './pages/SuccessStories';
// // import FindMentor from './pages/FindMentor';
// // import BecomeMentor from './pages/BecomeMentor';
// // import About from './pages/About';
// // import Home from './pages/Home';

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Login />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/register" element={<Register />} />
// //       <Route path="/profile" element={<Profile />} />
// //       <Route path="/resources" element={<Resources />} />
// //       <Route path="/stories" element={<SuccessStories />} />
// //       <Route path="/find-mentor" element={<FindMentor />} /> 
// //       <Route path="/become-mentor" element={<BecomeMentor />} />
// //       <Route path="/about" element={<About />} />
// //     </Routes>
// //   );
// // }

// // export default App;

// // src/App.tsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Login from './pages/auth/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Resources from './pages/Resources';
// import SuccessStories from './pages/SuccessStories';
// import FindMentor from './pages/FindMentor';
// import BecomeMentor from './pages/BecomeMentor';
// import About from './pages/About';
// import { IoLogIn } from 'react-icons/io5';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />               {/* ✅ Default route goes to Home */}
//       <Route path="/login" element={<IoLogIn />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/resources" element={<Resources />} />
//       <Route path="/stories" element={<SuccessStories />} />
//       <Route path="/find-mentor" element={<FindMentor />} />
//       <Route path="/become-mentor" element={<BecomeMentor />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }

// export default App;

// src/App.tsx
// src/App.tsximport React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/auth/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import SuccessStories from './pages/SuccessStories';
import FindMentor from './pages/FindMentor';
import BecomeMentor from './pages/BecomeMentor';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />            {/* ✅ Default = Login */}
      <Route path="/home" element={<Home />} />         {/* ✅ Home after login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/stories" element={<SuccessStories />} />
      <Route path="/find-mentor" element={<FindMentor />} />
      <Route path="/become-mentor" element={<BecomeMentor />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
