
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
