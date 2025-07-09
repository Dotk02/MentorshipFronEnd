// import {Route, Routes} from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './auth/login'
// import './App.css'
// function App() {

//   return (
//     <Routes>
//       <Route path= '/' element = {<Home/>}>  </Route>
//       <Route path= '/login' element = {<Login/>}>  </Route>
//     </Routes>
    
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Register from './auth/Register';
// Placeholder components
import FindMentor from './pages/FindMentor';
import BecomeMentor from "./pages/BecomeMentor.tsx";

import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
import About from './pages/About';
import Profile from './pages/Profile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/find-mentor" element={<FindMentor />} />
      <Route path="/become-mentor" element={<BecomeMentor />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
