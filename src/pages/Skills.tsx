import React from 'react';
import { Code, Database, Globe, Cog, Wrench, Brain, BookOpen, Settings, Layers, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData, softSkillsData } from '../data/skills';

const Skills: React.FC = () => {
  const SkillItem: React.FC<{ skill: { name: string } }> = ({ skill }) => (
    <Badge
      variant="secondary"
      className="text-sm font-medium px-4 py-2.5 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-default"
    >
      {skill.name}
    </Badge>
  );

  const SkillCategory: React.FC<{ title: string; skills: { name: string }[]; icon: React.ReactNode; gradient: string }> = ({ title, skills, icon, gradient }) => (
    <Card className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${gradient}`}></div>
      <CardHeader className="pb-4 relative z-10">
        <CardTitle className="flex items-center space-x-3 text-lg font-bold text-slate-900 dark:text-white">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-white">{icon}</span>
          </div>
          <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 relative z-10 flex-grow">
        <div className="flex flex-wrap gap-2.5 content-start">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const SoftSkillItem: React.FC<{ skill: { name: string }; index: number }> = ({ skill, index }) => {
    const colors = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-blue-500'
    ];

    return (
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-0.5 hover:shadow-lg transition-all duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        <div className="relative bg-white dark:bg-slate-900 rounded-xl p-4 h-full">
          <div className="flex items-center space-x-3">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${colors[index % colors.length]} shadow-lg`}></div>
            <span className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive showcase of technical expertise and professional competencies that drive innovation and excellence
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCategory
              title="Programming Languages"
              skills={skillsData.programmingLanguages}
              icon={<Code className="w-5 h-5" />}
              gradient="from-blue-500 to-cyan-500"
            />
            <SkillCategory
              title="Web Technologies & Frameworks"
              skills={skillsData.webTechnologies}
              icon={<Layers className="w-5 h-5" />}
              gradient="from-purple-500 to-pink-500"
            />
            <SkillCategory
              title="Databases"
              skills={skillsData.databases}
              icon={<Database className="w-5 h-5" />}
              gradient="from-green-500 to-emerald-500"
            />
            <SkillCategory
              title="Cloud & DevOps"
              skills={skillsData.cloudDevOps}
              icon={<Wrench className="w-5 h-5" />}
              gradient="from-orange-500 to-red-500"
            />
            <SkillCategory
              title="CS Fundamentals"
              skills={skillsData.csFundamentals}
              icon={<BookOpen className="w-5 h-5" />}
              gradient="from-indigo-500 to-purple-500"
            />
            <SkillCategory
              title="Tools & Platforms"
              skills={skillsData.toolsPlatforms}
              icon={<Settings className="w-5 h-5" />}
              gradient="from-teal-500 to-cyan-500"
            />
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Soft Skills
              </h2>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {softSkillsData.map((skill, index) => (
                  <SoftSkillItem key={index} skill={skill} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Professional Development
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to staying current with industry trends and emerging technologies through continuous learning and professional development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;