
import React from 'react';
import { Code, Database, Globe, Cog, Wrench, Brain, BookOpen, Settings } from 'lucide-react';
import { skillsData, softSkillsData } from '../data/skills';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills: React.FC = () => {
  const SkillItem: React.FC<{ skill: { name: string } }> = ({ skill }) => (
    <Badge variant="secondary" className="text-sm font-medium px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
      {skill.name}
    </Badge>
  );

  const SkillCategory: React.FC<{ title: string; skills: { name: string }[]; icon: React.ReactNode }> = ({ title, skills, icon }) => (
    <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-3 text-lg font-semibold text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">{icon}</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 flex-1">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const SoftSkillItem: React.FC<{ skill: { name: string } }> = ({ skill }) => (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
      <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
    </div>
  );

  return (
    // ... keep existing code (outer div structure and header section)
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkillsData.map((skill, index) => (
                  <SoftSkillItem key={index} skill={skill} />
                ))}
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
