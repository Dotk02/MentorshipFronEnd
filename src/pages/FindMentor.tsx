

import { useEffect } from 'react';
import timopix from '../assets/timoimg.jpeg';
import tolupix from '../assets/tolimg.jpeg';
import ronkepix from '../assets/ronkeimg.jpeg';

function FindMentor() {
  useEffect(() => {
    console.log("FindMentor page mounted");
  }, []);

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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Find a Mentor</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
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
  );
}

export default FindMentor;

