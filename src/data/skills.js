
console.log("[skills.js] Loaded and softSkillsData export is available!");

// Data for soft skills (simple list without quantifying)
const softSkillsData = [
  { name: "Communication" },
  { name: "Problem Solving" },
  { name: "Team Collaboration" },
  { name: "Technical Writing" },
  { name: "Leadership" },
  { name: "Time Management" }
];

// Data for technical skills (simple list without quantifying)
const skillsData = {
  "ai-ml": [
    { name: "Machine Learning" },
    { name: "Python (ML)" },
    { name: "TensorFlow" },
    { name: "Data Analysis" },
    { name: "Neural Networks" }
  ],
  frontend: [
    { name: "React" },
    { name: "JavaScript" },
    { name: "HTML/CSS" },
    { name: "Tailwind CSS" },
    { name: "TypeScript" }
  ],
  backend: [
    { name: "Node.js" },
    { name: "Python" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "REST APIs" }
  ],
  automation: [
    { name: "Selenium" },
    { name: "Jenkins" },
    { name: "GitHub Actions" },
    { name: "Test Automation" },
    { name: "CI/CD" }
  ],
  tools: [
    { name: "Git" },
    { name: "VS Code" },
    { name: "Docker" },
    { name: "Linux" },
    { name: "Postman" }
  ],
  languages: [
    { name: "JavaScript" },
    { name: "Python" },
    { name: "TypeScript" },
    { name: "Java" },
    { name: "SQL" }
  ]
};

export { softSkillsData, skillsData };
