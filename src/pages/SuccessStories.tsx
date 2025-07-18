import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SuccessStories() {
  useEffect(() => {
    console.log("SuccessStories page loaded");
  }, []);

  const stories = [
    {
      id: 1,
      name: 'Sobowale Olusola',
      story:
        'Before joining the mentorship program, I had no direction. Now I’m a junior frontend developer at a tech startup.',
      avatar: 'https://i.pravatar.cc/150?img=10',
    },
    {
      id: 2,
      name: 'Odunlade Adekola',
      story:
        'My mentor guided me through career confusion. I just landed my first internship thanks to this platform!',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      name: 'Adebayo Salami',
      story:
        'Connecting with a mentor helped me gain confidence and build my first mobile app.',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-blue-700">Mentorship</div>
            <div className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-blue-600">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-20 px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Success Stories</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {stories.map((story) => (
            <div key={story.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={story.avatar}
                alt={story.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-400"
              />
              <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
              <p className="text-gray-700 text-sm">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
