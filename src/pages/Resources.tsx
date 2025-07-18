import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Resources() {
  useEffect(() => {
    console.log("Resources page loaded");
  }, []);

  const resources = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'Learn HTML, CSS, JavaScript, and React with this complete beginner-friendly guide.',
      link: 'https://developer.mozilla.org/en-US/',
    },
    {
      id: 2,
      title: 'Backend Development',
      description: 'Get started with Node.js, Express, and building REST APIs.',
      link: 'https://nodejs.dev/',
    },
    {
      id: 3,
      title: 'Free Programming Courses',
      description: 'Access free full-stack development courses online.',
      link: 'https://www.freecodecamp.org/',
    },
    {
      id: 4,
      title: 'Version Control with Git',
      description: 'Understand Git and GitHub for version control and collaboration.',
      link: 'https://git-scm.com/doc',
    },
    {
      id: 5,
      title: 'UI/UX Design Basics',
      description: 'Explore the foundations of user interface and experience design.',
      link: 'https://www.figma.com/resources/learn-design/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-xl font-bold text-blue-700">MentorshipApp</div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
            {/* <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link> */}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Learning Resources</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-700 mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
