import React, { useState } from 'react';
import { experienceData } from '../data/experience';
import { Award, Calendar, MapPin, Eye, Loader } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const techColorPalette = [
  "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
  "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
  "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800",
  "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800",
  "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800",
];

const ExperienceCard = ({ experience, onViewCertificate }) => {
  const getTypeStyles = (type) => {
    const styles = {
      internship: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",
      casestudy: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-400 dark:border-violet-800",
      project: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"
    };
    return styles[type?.toLowerCase()] || styles.internship;
  };

  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500 overflow-hidden hover:-translate-y-1">
      {/* Accent Bar */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="p-8">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-2xl text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {experience.company}
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">
              {experience.role}
            </p>

            <div className="flex flex-wrap gap-5 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Type Badge & Certificate */}
          <div className="flex flex-col items-end gap-2 ml-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeStyles(experience.type)}`}>
              {experience.type || 'Internship'}
            </span>
            {experience.hasCertificate && (
              <Button
                onClick={onViewCertificate}
                variant="ghost"
                size="sm"
                className="h-7 px-3 text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 mr-1.5" />
                Certificate
              </Button>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-6" />

        {/* Content Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technologies */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-1 rounded-full bg-blue-500" />
              <h4 className="font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white">
                Tech Stack
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border backdrop-blur-sm transition-transform hover:scale-105 ${techColorPalette[idx % techColorPalette.length]
                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-1 rounded-full bg-purple-500" />
              <h4 className="font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white">
                Impact & Contributions
              </h4>
            </div>
            <ul className="space-y-3">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateLoading, setCertificateLoading] = useState(false);
  const [certificateError, setCertificateError] = useState(false);

  const handleViewCertificate = (certificateUrl) => {
    console.log('Opening certificate:', certificateUrl);
    setSelectedCertificate(certificateUrl);
    setCertificateLoading(true);
    setCertificateError(false);
  };

  const handleImageLoad = () => {
    console.log('Certificate loaded successfully');
    setCertificateLoading(false);
  };

  const handleImageError = (e) => {
    console.error('Certificate failed to load:', e);
    setCertificateLoading(false);
    setCertificateError(true);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
    setCertificateLoading(false);
    setCertificateError(false);
  };

  const handleRetry = () => {
    console.log('Retrying certificate load');
    setCertificateError(false);
    setCertificateLoading(true);
    // Force image reload by adding timestamp
    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    img.src = selectedCertificate + '?t=' + Date.now();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my professional experience and roles that shaped my expertise in technology
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onViewCertificate={() =>
                experience.certificateUrl && handleViewCertificate(experience.certificateUrl)
              }
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden min-h-[400px]">
            {certificateLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-10">
                <div className="flex flex-col items-center gap-3">
                  <Loader className="w-8 h-8 text-blue-600 animate-spin" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">Loading certificate...</p>
                </div>
              </div>
            )}

            {certificateError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">Failed to load certificate</p>
                  <Button
                    onClick={handleRetry}
                    size="sm"
                    className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : (
              selectedCertificate && (
                <img
                  src={selectedCertificate}
                  alt="Certificate"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: certificateLoading ? 'none' : 'block' }}
                />
              )
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Experience;
