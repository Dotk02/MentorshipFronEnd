// import React from 'react';

// function Resources() {
//   // Sample resources — replace or fetch from backend
//   const resources = [
//     {
//       id: 1,
//       title: 'Frontend Development',
//       description: 'Learn HTML, CSS, JavaScript, and React with this complete beginner-friendly guide.',
//       link: 'https://developer.mozilla.org/en-US/',
//     },
//     {
//       id: 2,
//       title: 'Backend Development',
//       description: 'Get started with Node.js, Express, and building REST APIs.',
//       link: 'https://nodejs.dev/',
//     },
//     {
//       id: 3,
//       title: 'Free Programming Courses',
//       description: 'Access free full-stack development courses online.',
//       link: 'https://www.freecodecamp.org/',
//     },
//     {
//       id: 4,
//       title: 'Version Control with Git',
//       description: 'Understand Git and GitHub for version control and collaboration.',
//       link: 'https://git-scm.com/doc',
//     },
//     {
//       id: 5,
//       title: 'UI/UX Design Basics',
//       description: 'Explore the foundations of user interface and experience design.',
//       link: 'https://www.figma.com/resources/learn-design/',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Learning Resources</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {resources.map((resource) => (
//           <div key={resource.id} className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
//             <p className="text-gray-700 mb-4">{resource.description}</p>
//             <a
//               href={resource.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:underline"
//             >
//               Visit Resource →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Resources;

import React, { useEffect } from 'react';

function Resources() {
  useEffect(() => {
    console.log("Resources page loaded");
  }, []);

  // Sample resources — replace or fetch from backend
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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
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
