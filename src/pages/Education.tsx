
import React from 'react';
import { educationData } from '../data/education';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in computer science and technology
          </p>
        </div>

        {/* Education Table */}
        <Card className="mb-16 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 shadow-2xl">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead className="text-white font-bold text-base py-6 px-8 border-r border-blue-400/30">
                      Qualification
                    </TableHead>
                    <TableHead className="text-white font-bold text-base py-6 px-8 border-r border-blue-400/30">
                      Institution/School
                    </TableHead>
                    <TableHead className="text-white font-bold text-base py-6 px-8 border-r border-blue-400/30">
                      University/Board
                    </TableHead>
                    <TableHead className="text-white font-bold text-base py-6 px-8 border-r border-blue-400/30">
                      Duration
                    </TableHead>
                    <TableHead className="text-white font-bold text-base py-6 px-8">
                      Percentage/CGPA
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {educationData.map((education, index) => (
                    <TableRow 
                      key={education.id} 
                      className={`border-b-2 border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700/70 transition-all duration-200 ${
                        index % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'
                      }`}
                    >
                      <TableCell className="py-6 px-8 font-semibold text-gray-900 dark:text-white text-base border-r border-gray-200 dark:border-gray-700">
                        {education.qualification}
                      </TableCell>
                      <TableCell className="py-6 px-8 text-gray-700 dark:text-gray-300 text-base border-r border-gray-200 dark:border-gray-700">
                        {education.institution}
                      </TableCell>
                      <TableCell className="py-6 px-8 text-gray-700 dark:text-gray-300 text-base border-r border-gray-200 dark:border-gray-700">
                        {education.university}
                      </TableCell>
                      <TableCell className="py-6 px-8 text-gray-700 dark:text-gray-300 text-base border-r border-gray-200 dark:border-gray-700">
                        {education.duration}
                      </TableCell>
                      <TableCell className="py-6 px-8 font-bold text-blue-600 dark:text-blue-400 text-base">
                        {education.result}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Learning Philosophy */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Lifelong Learning
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Education doesn't stop at graduation. I continuously update my skills through online courses, workshops, and hands-on projects to stay current with evolving technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
