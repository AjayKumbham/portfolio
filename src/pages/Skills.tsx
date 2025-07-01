
import React from 'react';
import { Code, Database, Globe, Cog, Wrench, Brain, BookOpen, Settings } from 'lucide-react';
import { skillsData, softSkillsData } from '../data/skills';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills: React.FC = () => {
  const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        <Badge variant="secondary" className="text-xs font-semibold px-2 py-1">
          {skill.level}%
        </Badge>
      </div>
      <Progress value={skill.level} className="h-1 bg-gray-100 dark:bg-gray-800" />
    </div>
  );

  const SkillCategory: React.FC<{ title: string; skills: { name: string; level: number }[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
    <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-3 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">{icon}</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const StarRating: React.FC<{ level: number }> = ({ level }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl ${
              star <= level ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive overview of technical expertise and professional competencies
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="AI & Machine Learning" skills={skillsData["ai-ml"]} icon={<Brain className="w-5 h-5" />} />
            <SkillCategory title="Frontend Development" skills={skillsData.frontend} icon={<Globe className="w-5 h-5" />} />
            <SkillCategory title="Backend Development" skills={skillsData.backend} icon={<Database className="w-5 h-5" />} />
            <SkillCategory title="Automation" skills={skillsData.automation} icon={<Settings className="w-5 h-5" />} />
            <SkillCategory title="Tools & Platforms" skills={skillsData.tools} icon={<Cog className="w-5 h-5" />} />
            <SkillCategory title="Programming Languages" skills={skillsData.languages} icon={<Code className="w-5 h-5" />} />
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Soft Skills
            </h2>
          </div>
          
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Skill
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Level
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {softSkillsData.map((skill, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </td>
                        <td className="py-4 px-4">
                          <StarRating level={skill.level} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Note */}
        <div className="text-center bg-gray-100 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Continuous Professional Development
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Committed to staying current with industry trends and emerging technologies through continuous learning and professional development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
