
import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personal';
import { homeData } from '../data/home';
import { projectsData } from '../data/projects';
import { achievementsData } from '../data/achievements';
import { certificationsData } from '../data/certifications';
import { ArrowRight, Trophy, Award, Code, ExternalLink, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3);
  const topAchievements = achievementsData.slice(0, 2);
  const topCertifications = certificationsData.slice(0, 3);

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
                  <div className="text-lg sm:text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">{homeData.stats.cgpa}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{homeData.stats.cgpaDescription}</div>
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
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      <Code className="w-4 h-4" /> Code
                    </a>
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
            href="https://blog-ajaykumbham.vercel.app/"
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
