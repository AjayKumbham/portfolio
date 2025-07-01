
import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personal';
import { homeData } from '../data/home';

const Home: React.FC = () => {
  return (
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
  );
};

export default Home;
