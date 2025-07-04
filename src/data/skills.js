console.log("[skills.js] Loaded and softSkillsData export is available!");

// Data for soft skills (simple list)
const softSkillsData = [
  { name: "Problem Solving" },
  { name: "Attention to Detail" },
  { name: "Adaptability" },
  { name: "Self-Learning" },
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Team Leadership" }
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
    { name: "DBMS" },
    { name: "Operating Systems" },
    { name: "Computer Networks" },
    { name: "Object-Oriented Programming (Java)" },
    { name: "Software Engineering" },
    { name: "Artificial Intelligence" },
    { name: "Machine Learning" }
  ]
};

export { softSkillsData, skillsData };
