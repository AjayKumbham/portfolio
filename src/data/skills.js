
console.log("[skills.js] Loaded and softSkillsData export is available!");

// Data for soft skills (Stars out of 5)
const softSkillsData = [
  { name: "Communication", level: 4 },
  { name: "Problem Solving", level: 5 },
  { name: "Team Collaboration", level: 4 },
  { name: "Technical Writing", level: 4 },
  { name: "Leadership", level: 3 },
  { name: "Time Management", level: 4 }
];

// Data for technical skills (Percentages out of 100)
const skillsData = {
  "ai-ml": [
    { name: "Machine Learning", level: 75 },
    { name: "Python (ML)", level: 80 },
    { name: "TensorFlow", level: 65 },
    { name: "Data Analysis", level: 70 },
    { name: "Neural Networks", level: 60 }
  ],
  frontend: [
    { name: "React", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "Tailwind CSS", level: 70 },
    { name: "TypeScript", level: 65 }
  ],
  backend: [
    { name: "Node.js", level: 70 },
    { name: "Python", level: 75 },
    { name: "MySQL", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "REST APIs", level: 70 }
  ],
  automation: [
    { name: "Selenium", level: 70 },
    { name: "Jenkins", level: 60 },
    { name: "GitHub Actions", level: 65 },
    { name: "Test Automation", level: 75 },
    { name: "CI/CD", level: 65 }
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "VS Code", level: 85 },
    { name: "Docker", level: 50 },
    { name: "Linux", level: 65 },
    { name: "Postman", level: 70 }
  ],
  languages: [
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "TypeScript", level: 65 },
    { name: "Java", level: 60 },
    { name: "SQL", level: 70 }
  ]
};

export { softSkillsData, skillsData };
