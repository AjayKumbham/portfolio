import React from 'react';
import { projectsData } from '../data/projects';

const Projects: React.FC = () => {
  interface Project {
    id: number;
    title: string;
    description: string;
    points: string[];
    tech: string[];
    github?: string;
    live?: string;
    featured?: boolean;
  }

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
      <div className="group relative flex flex-col justify-between bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden min-h-[400px]">
        {/* Glow behind card on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="p-6 md:p-8 flex flex-col h-full z-10">
          <div>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {project.title}
              </h3>
              {project.featured && (
                <span className="px-2.5 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs rounded-full font-medium flex-shrink-0">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Key Points */}
            <div className="mb-6">
              <ul className="space-y-2">
                {(project.points || []).map((point: string, index: number) => (
                  <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mt-1.5 mr-2.5 flex-shrink-0 shadow-sm"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto">
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(project.tech || []).map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-purple-500 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm font-medium">Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse collection of my recent work, showcasing enterprise solutions, full-stack applications, and specialized tooling designed for production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700/50 rounded-3xl p-10 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and build scalable, secure, and beautiful digital experiences.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
