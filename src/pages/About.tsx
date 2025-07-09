

import { useEffect } from 'react';

function About() {
  useEffect(() => {
    console.log("About page mounted");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About Us</h1>

        <section className="mb-10">
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Our platform is committed to building strong mentorship connections that empower individuals to grow, learn, and succeed.
            We believe in the power of community and knowledge-sharing to inspire the next generation of leaders.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h3>
            <p className="text-gray-600">
              To connect mentors and mentees in meaningful ways that foster personal and professional development.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted platform for mentorship, inspiring transformation across all industries and backgrounds.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Values</h3>
            <p className="text-gray-600">
              Integrity, commitment, empathy, and the belief that everyone has something valuable to give and learn.
            </p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Meet the Team</h2>
          <p className="text-gray-600 mb-6">
            Behind this platform is a passionate team of developers, mentors, and dreamers dedicated to creating opportunities for growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[ // Example team members
              { name: 'Kolawole Soderu', role: 'Founder & Lead Developer', avatar: 'https://i.pravatar.cc/150?img=33' },
              { name: 'Grace Adeola', role: 'Mentorship Coordinator', avatar: 'https://i.pravatar.cc/150?img=45' },
              { name: 'Emeka Obi', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?img=12' },
            ].map((member, i) => (
              <div key={i} className="w-48 text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-blue-400"
                />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
