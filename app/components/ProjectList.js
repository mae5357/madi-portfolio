import React from 'react';
import Project from './Project';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one.' },
  { id: 2, title: 'Project Two', description: 'Description of project two.' },
  { id: 3, title: 'Project Three', description: 'Description of project three.' },
];

function ProjectList() {
  return (
    <section className="ProjectList">
      {projects.map(project => (
        <Project key={project.id} title={project.title} description={project.description} />
      ))}
    </section>
  );
}

export default ProjectList;
