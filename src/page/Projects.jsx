import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management with Socket.io",
      technologies: ["React", "Socket.io", "PostgreSQL", "Redux"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Generative AI powered chat application with OpenAI integration",
      technologies: ["React", "OpenAI API", "Firebase", "Tailwind"],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[font1]">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#A9927D] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="px-4 py-2 border border-gray-600 rounded-lg hover:border-emerald-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    className="px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
