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

// Data for technical skills (as requested)
const skillsData = {
  programmingLanguages: [
    { name: "Java (Primary)" },
    { name: "Python" },
    { name: "JavaScript" }
  ],
  fullStackDevelopment: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "React.js" },
    { name: "Node.js" },
    { name: "Spring Boot" }
  ],
  aiMl: [
    { name: "TensorFlow" },
    { name: "Scikit-learn" },
    { name: "LangChain" },
    { name: "NumPy & Pandas" },
    { name: "Matplotlib & Seaborn" }
  ],
  databases: [
    { name: "SQL (Query Language)" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Supabase" }
  ],
  devToolsPlatforms: [
    { name: "Git & GitHub" },
    { name: "Docker" },
    { name: "VS Code" },
    { name: "Postman" }
  ],
  relevantCoursework: [
    { name: "Data Structures & Algorithms" },
    { name: "Operating Systems" },
    { name: "DBMS" },
    { name: "Computer Networks" },
    { name: "Object-Oriented Programming (Java)" },
    { name: "Software Engineering" },
    { name: "Artificial Intelligence" },
    { name: "Machine Learning" }
  ]
};

export { softSkillsData, skillsData };
