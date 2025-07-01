
import React, { useState } from 'react';
import { achievementsData } from '../data/achievements';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<any | null>(null);

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
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Header with Icon and Title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="text-2xl flex-shrink-0 mt-1">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {achievement.institution}
                  </p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Rank/Achievement:</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {achievement.rank}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Performance:</span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {achievement.performance}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Year:</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {achievement.date}
                  </span>
                </div>
              </div>

              {/* View Certificate Button */}
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
                        <span className="text-2xl">{achievement.icon}</span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
