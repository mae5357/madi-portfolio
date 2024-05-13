import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-00 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-16xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Item */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">
              Description of project 1.
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
