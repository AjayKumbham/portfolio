
export const projectsData = [
  {
    id: 1,
    title: "Task Management Web App",
    description: "A full-stack task management application built with React and Node.js, featuring user authentication and real-time updates",
    features: [
      "User authentication and authorization",
      "Real-time task updates with Socket.io",
      "Drag and drop task management",
      "Team collaboration features",
      "Email notifications"
    ],
    image: "/data/images/projects/task-manager.jpg", // Place project images in public/data/images/projects/
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/alexjohnson/task-manager",
    live: "https://taskmanager-demo.com",
    featured: true,
    hasLiveDemo: true
  },
  {
    id: 2,
    title: "University Portal Clone",
    description: "Academic project recreating university student portal with course management and grade tracking functionality",
    features: [
      "Student dashboard and profile management",
      "Course enrollment and scheduling",
      "Grade tracking and GPA calculation",
      "Assignment submission system",
      "Faculty communication portal"
    ],
    image: "/data/images/projects/university-portal.jpg",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/alexjohnson/university-portal",
    live: "https://university-demo.com",
    featured: true,
    hasLiveDemo: true
  },
  {
    id: 3,
    title: "Weather App",
    description: "Simple weather application using OpenWeather API with location-based forecasts and responsive design",
    features: [
      "Current weather conditions",
      "5-day weather forecast",
      "Location-based weather detection",
      "Search by city functionality",
      "Responsive mobile design"
    ],
    image: "/data/images/projects/weather-app.jpg",
    tech: ["JavaScript", "OpenWeather API", "CSS"],
    github: "https://github.com/alexjohnson/weather-app",
    live: "https://weather-demo.com",
    featured: false,
    hasLiveDemo: false
  }
];
