
import React, { useState } from 'react';
import { aboutData } from '../data/about';
import { personalInfo } from '../data/personal';
import { educationData } from '../data/education';
import { resumeData } from '../data/resume';
import { skillsData } from '../data/skills';
import { 
  X, Download, Eye, GraduationCap, Calendar, 
  TrendingUp, FileText, Code, Database, 
  Layers, Wrench, BookOpen, Settings 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

  const SkillCategory: React.FC<{ title: string; skills: { name: string }[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
    <div className="group flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <div className="sm:w-64 flex-shrink-0 flex items-center gap-4">
        <div className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
        {skills.map((skill, index) => (
          <div key={index} className="relative group/item">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200">
              {skill.name}
            </span>
            <div className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover/item:w-full opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Technical Expertise Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base mt-2">My technical stack and areas of expertise</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
              <SkillCategory
                title="Programming"
                skills={skillsData.programmingLanguages}
                icon={<Code className="w-5 h-5" />}
              />
              <SkillCategory
                title="Web & Frameworks"
                skills={skillsData.webTechnologies}
                icon={<Layers className="w-5 h-5" />}
              />
              <SkillCategory
                title="Databases"
                skills={skillsData.databases}
                icon={<Database className="w-5 h-5" />}
              />
              <SkillCategory
                title="Cloud & DevOps"
                skills={skillsData.cloudDevOps}
                icon={<Wrench className="w-5 h-5" />}
              />
              <SkillCategory
                title="CS Fundamentals"
                skills={skillsData.csFundamentals}
                icon={<BookOpen className="w-5 h-5" />}
              />
              <SkillCategory
                title="Tools & Platforms"
                skills={skillsData.toolsPlatforms}
                icon={<Settings className="w-5 h-5" />}
              />
            </div>
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

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform md:-translate-x-px hidden md:block"></div>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
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
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full whitespace-nowrap">
                            <TrendingUp className="w-3 h-3" />
                            {edu.result}
                          </span>
                        </div>
                      </div>
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
                  <div className="hidden md:flex items-start justify-center w-12 flex-shrink-0 pt-5">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white dark:border-gray-900 shadow-md ring-2 ring-blue-500/30"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <FileText className="w-9 h-9 text-white" />
              </div>
            </div>
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
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 h-[calc(90vh-73px)]">
              <iframe
                src={`${resumeData.pdfPath}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title="Resume PDF Viewer"
              >
                <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  </div>
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Your browser doesn't support embedded PDFs
                  </p>
                  <button
                    onClick={handleDownload}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Instead
                  </button>
                </div>
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
