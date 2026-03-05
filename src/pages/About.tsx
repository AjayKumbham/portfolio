
import React, { useState } from 'react';
import { aboutData } from '../data/about';
import { personalInfo } from '../data/personal';
import { educationData } from '../data/education';
import { resumeData } from '../data/resume';
import { X, Download, Eye, GraduationCap, Calendar, TrendingUp, FileText } from 'lucide-react';

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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {aboutData.intro}
          </p>
        </div>

        {/* Profile + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
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
          <div className="order-1 lg:order-2 space-y-8">
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
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Passionate</span> About
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </div>

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

        {/* Academic Journey */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Academic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base mt-2">Education & Achievements</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform md:-translate-x-px hidden md:block"></div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                              {edu.qualification}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 text-base font-medium mt-0.5">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {/* Score Badge */}
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full whitespace-nowrap">
                            <TrendingUp className="w-3 h-3" />
                            {edu.result}
                          </span>
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {edu.university}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot – center (md) */}
                  <div className="hidden md:flex items-start justify-center w-12 flex-shrink-0 pt-5">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white dark:border-gray-900 shadow-md ring-2 ring-blue-500/30"></div>
                  </div>

                  {/* Empty half for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            {/* Icon block */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <FileText className="w-9 h-9 text-white" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                My Resume
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                Download my resume or preview it directly to learn more about my background, experience, and skills.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                Last updated: {resumeData.lastUpdated}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={handleDownload}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download PDF
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-sm hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">Resume Preview</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-73px)] bg-gray-50 dark:bg-gray-800 p-4">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
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
                <div className="hidden flex-col items-center justify-center p-12 text-center bg-gray-50 dark:bg-gray-800 min-h-[400px]">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Resume Preview Unavailable
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Add your preview image at:
                  </p>
                  <code className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg text-xs font-mono">
                    {resumeData.previewImage}
                  </code>
                  <button
                    onClick={handleDownload}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
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
