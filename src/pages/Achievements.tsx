import React, { useState } from 'react';
import { achievementsData } from '../data/achievements';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Trophy, MapPin, Calendar, TrendingUp, FileText } from "lucide-react";

const Achievements: React.FC = () => {
  interface Achievement {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    category: string;
    image: string;
    details: string;
  }

  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of top academic and competitive milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail Section - YouTube style */}
              {achievement.thumbnail && (
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={achievement.thumbnail} 
                      alt={`${achievement.title} thumbnail`}
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Overlay with achievement icon */}
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg p-1.5 shadow-lg flex items-center justify-center">
                        <span className="text-lg">{achievement.icon}</span>
                      </div>
                    </div>

                    {/* Achievement type indicator */}
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                        Achievement
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className="p-6">
                {/* Title / Distinction */}
                <div className="flex items-start gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                {/* Context / Organization */}
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {achievement.institution}
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.date}
                  </span>
                </div>

                {/* Ranking or Impact */}
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {achievement.rank}
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      {achievement.performance}
                    </div>
                  </div>
                </div>

                {/* Short Description (conditional rendering) */}
                {achievement.description && (
                  <div className="flex items-start gap-2 mb-4">
                    <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                )}

                {/* Conditional View Certificate Button */}
                {achievement.certificateImage && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        onClick={() => setSelectedAchievement(achievement)}
                      >
                        <Eye className="w-4 h-4" />
                        View Certificate
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-full max-h-[90vh] p-0">
                      <div className="relative">
                        <img
                          src={achievement.certificateImage}
                          alt={`${achievement.title} Certificate`}
                          className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
                        />
                        <div className="p-6 bg-white dark:bg-gray-800">
                          <div className="flex items-start gap-3 mb-3">
                            <Trophy className="w-6 h-6 text-yellow-500" />
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {achievement.title}
                              </h3>
                              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                                {achievement.institution}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Achievement:</span>
                              <p className="font-semibold text-gray-900 dark:text-white">{achievement.rank}</p>
                            </div>
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Performance:</span>
                              <p className="font-semibold text-green-600 dark:text-green-400">{achievement.performance}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
