
import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personal';
import { homeData } from '../data/home';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';
import { certificationsData } from '../data/certifications';
import { ArrowRight, Trophy, Award, Code, ExternalLink, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  // Select specific featured projects by ID
  const featuredProjectIds = [4, 1, 2];
  const featuredProjects = featuredProjectIds
    .map(id => projectsData.find(p => p.id === id))
    .filter(Boolean);

  const topAchievements = achievementsData.slice(0, 2);
  const topCertifications = certificationsData.slice(0, 3);

  // Function to get the most important technologies for each project
  const getImportantTech = (projectTitle: string, techArray: string[]) => {
    // Specific tech stacks for certain projects
    const specificMappings: { [key: string]: string[] } = {
      'Healthcare Services & Pharmacy Platform': ['React', 'SpringBoot', 'MySQL', 'JWT'],
      'Developer Blogging Platform': ['React', 'TailwindCSS', 'TypeScript', 'Supabase'],
      'Evernorth Backend API (Healthcare)': ['Spring Boot', 'JWT', 'Redis', 'MySQL']
    };

    // Check if project has specific mapping
    if (specificMappings[projectTitle]) {
      return specificMappings[projectTitle];
    }

    // Default: prioritize main frameworks/languages
    const priority = ['React', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot', 'SpringBoot', 'Node.js', 'Python', 'Next.js', 'Vue', 'Angular', 'TailwindCSS', 'Supabase', 'MySQL', 'PostgreSQL', 'Redis', 'JWT', 'Apache Avro', 'Protocol Buffers', 'Kafka'];
    const important = techArray.filter(tech => priority.some(p => tech.includes(p)));
    const remaining = techArray.filter(tech => !priority.some(p => tech.includes(p)));
    return [...important, ...remaining].slice(0, 4);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                  <span className="block text-gray-900 dark:text-white">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                    {homeData.name}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                  {homeData.title}
                </p>
                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                  {homeData.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
                >
                  <span className="relative z-10">Explore Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">{homeData.stats.nptelAchievements}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{homeData.stats.nptelDescription}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">{homeData.stats.projectsCount}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{homeData.stats.projectsDescription}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">{homeData.stats.openSource}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{homeData.stats.openSourceDescription}</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src={homeData.profileImage}
                  alt={homeData.name}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 sm:border-8 border-white dark:border-gray-800 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Check out some of my recent work</p>
            </div>
            <Link to="/projects" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: any) => (
              <div key={project.id} className="group relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden min-h-[320px] p-6 lg:p-8">
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {getImportantTech(project.title, project.tech || []).map((tech: string, i: number) => (
                        <span key={i} className="text-[11px] px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-full font-medium shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:-translate-y-0.5">
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:-translate-y-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Top <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Achievements</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Recognition and milestones</p>
            </div>
            <Link to="/achievements" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topAchievements.map((achievement) => (
              <div key={achievement.id} className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-yellow-200 dark:border-yellow-800 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.institution}</p>
                    <p className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-3">{achievement.rank}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{achievement.performance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Latest <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Certifications</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Professional credentials and learning</p>
            </div>
            <Link to="/certifications" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCertifications.map((cert) => (
              <div key={cert.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                <Award className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{cert.certificateTitle}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuingOrganization}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{cert.dateIssued}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Read My Blog
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore technical articles, tutorials, and insights on software development, cloud computing, and emerging technologies.
          </p>
          <a
            href="https://ajaykumbham-blog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Visit Blog <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
