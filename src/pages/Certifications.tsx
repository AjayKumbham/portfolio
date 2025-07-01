
import React, { useState } from "react";
import { technicalSoftSkills, hackathonsAndEvents, certificationsData } from "../data/certifications";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Calendar, Building, ExternalLink, Shield, Eye } from "lucide-react";

// Unified Certificate Card Component
const CertificateCard: React.FC<{ cert: any }> = ({ cert }) => {
  const [imageError, setImageError] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 hover:border-blue-200 dark:hover:border-blue-800">
      <CardContent className="p-0">
        {/* Thumbnail Section - YouTube style */}
        <div className="relative overflow-hidden">
          <div className="aspect-video relative group-hover:scale-105 transition-transform duration-300">
            {cert.thumbnailImage && !thumbError ? (
              <img 
                src={cert.thumbnailImage} 
                alt={`${cert.certificateTitle} thumbnail`}
                className="w-full h-full object-cover"
                onError={() => setThumbError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            
            {/* Overlay with organization logo */}
            <div className="absolute top-3 left-3">
              {cert.organizationLogo && !imageError ? (
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg p-1.5 shadow-lg">
                  <img 
                    src={cert.organizationLogo} 
                    alt={cert.issuingOrganization}
                    className="w-full h-full object-contain"
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg p-1.5 shadow-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
              )}
            </div>

            {/* Duration/Type indicator */}
            <div className="absolute bottom-3 right-3">
              <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                Certificate
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {cert.certificateTitle}
            </h3>
          </div>

          {/* Organization and Date */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Building className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">{cert.issuingOrganization}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>Issued: {cert.dateIssued}</span>
            </div>
          </div>

          {/* Credential ID */}
          {cert.credentialId && (
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-400">
                Credential ID: <span className="font-mono text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{cert.credentialId}</span>
              </span>
            </div>
          )}

          {/* Hackathon specific info */}
          {cert.roleAndTheme && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Role & Theme:</span> {cert.roleAndTheme}
            </div>
          )}

          {/* Skills Tags */}
          {cert.skills && cert.skills.length > 0 && (
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 4).map((skill: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50">
                    #{skill.replace(/\s+/g, '')}
                  </Badge>
                ))}
                {cert.skills.length > 4 && (
                  <Badge variant="outline" className="text-xs px-2 py-1">
                    +{cert.skills.length - 4} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
                  <Eye className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-black">
                <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                  <img 
                    src={cert.certificateImage} 
                    alt={`${cert.certificateTitle} Certificate`}
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {cert.hackathonName || cert.certificateTitle}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {cert.issuingOrganization} • {cert.dateIssued}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {cert.verificationLink && (
              <Button 
                variant="outline" 
                className="border-2 hover:bg-green-50 hover:border-green-200 dark:hover:bg-green-900/20 dark:hover:border-green-800"
                onClick={() => window.open(cert.verificationLink, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Certifications: React.FC = () => {
  // Combine all certifications into one array
  const allCertifications = [
    ...(certificationsData || []),
    ...technicalSoftSkills,
    ...hackathonsAndEvents
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications, technical skills, and achievements that showcase my continuous learning journey
          </p>
        </div>
        
        {/* All Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allCertifications.map((cert, i) => (
            <CertificateCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
