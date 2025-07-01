
import React from 'react';
import { personalInfo } from '../data/personal';
import { resumeData } from '../data/resume';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = resumeData.pdfPath;
    link.download = resumeData.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Downloading resume:', resumeData.fileName);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my comprehensive resume to learn more about my background and experience
          </p>
          
          <button
            onClick={handleDownload}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {resumeData.lastUpdated}
          </p>
        </div>

        {/* Resume Preview Image */}
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Resume Preview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Click the download button above to get the full PDF version
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
              <img 
                src={resumeData.previewImage}
                alt="Resume Preview"
                className="w-full h-auto object-contain max-h-screen"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="hidden p-12 text-center bg-gray-100 dark:bg-gray-800">
                <div className="text-gray-500 dark:text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Resume Preview Image Not Found
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please add your resume preview image at: <br />
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                    public/resume/resume-preview.png
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to discuss opportunities? Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
