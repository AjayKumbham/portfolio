
import React, { useState } from 'react';
import { aboutData } from '../data/about';
import { personalInfo } from '../data/personal';
import { educationData } from '../data/education';
import { resumeData } from '../data/resume';
import { X, Download, Eye, GraduationCap, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeData.pdfPath;
    link.download = resumeData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <div className="mb-20">
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

        {/* Education Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Academic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My educational background and academic achievements
            </p>
          </div>

          <div className="space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.qualification}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {edu.university}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {edu.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              📄 My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Download my comprehensive resume or preview it below to learn more about my background and experience
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {resumeData.lastUpdated}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download PDF
            </button>

            <button
              onClick={() => setShowResumeModal(true)}
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-900 dark:border-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              <Eye className="w-5 h-5 mr-2" />
              Preview Resume
            </button>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-xl font-bold">Resume Preview</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] bg-gray-100 dark:bg-gray-800 p-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={resumeData.previewImage}
                  alt="Resume Preview"
                  className="w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center justify-center p-12 text-center bg-gray-100 dark:bg-gray-800 min-h-[400px]">
                  <div className="text-gray-500 dark:text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Resume Preview Image Not Found
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Please add your resume preview image at:
                  </p>
                  <code className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded text-xs">
                    {resumeData.previewImage}
                  </code>
                  <button
                    onClick={handleDownload}
                    className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Instead
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
