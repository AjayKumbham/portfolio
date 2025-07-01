
import React from 'react';
import { aboutData } from '../data/about';
import { personalInfo } from '../data/personal';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {aboutData.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {aboutData.description}
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What defines me:</h3>
              <div className="space-y-3">
                {aboutData.personality.map((trait, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 dark:text-gray-300">{trait}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Passions */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Passionate</span> About
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.passions.map((passion, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {passion.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {passion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
