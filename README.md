# Kumbham Ajay Goud - Portfolio

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Online-green?style=for-the-badge)](https://ajaykumbham-portfolio.vercel.app/)

🌐 **Live Site**: [https://ajaykumbham-portfolio.vercel.app/](https://ajaykumbham-portfolio.vercel.app/)

A modern, responsive portfolio website showcasing my skills, projects, and professional journey. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Performance Optimized**: Fast loading times with optimized assets and lazy loading
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML

### Portfolio Sections
- **Home**: Hero section with introduction and call-to-action
- **About**: Professional background, skills overview, and personal story
- **Skills**: Technical skills with proficiency indicators
- **Projects**: Showcase of projects with detailed descriptions and live demos
- **Experience**: Work history and professional achievements
- **Education**: Academic background and certifications
- **Achievements**: Awards, certifications, and notable accomplishments
- **Contact**: Contact form with social media links

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable components
- **State Management**: React Context for theme management
- **Form Handling**: Contact form with email integration
- **Image Optimization**: Optimized project images and assets
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0**: Modern React with hooks and functional components
- **TypeScript 5.0.0**: Type-safe JavaScript development
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Vite 4.4.0**: Fast build tool and development server

### UI Components
- **Lucide React**: Beautiful, customizable icons
- **Custom Components**: Tailored UI components for portfolio needs
- **Responsive Grid**: CSS Grid and Flexbox for layouts

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing and optimization
- **TypeScript Compiler**: Type checking and compilation

### Deployment
- **Static Site Generation**: Optimized for static hosting
- **CDN Ready**: Optimized assets for global delivery

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Upload the `dist` folder to any static hosting service

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── data/
│   │   ├── documents/
│   │   │   └── resume.pdf
│   │   └── images/
│   │       ├── achievements/
│   │       ├── certificates/
│   │       ├── projects/
│   │       └── profile-formal.jpg
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Navigation.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── data/             # Static data files
│   │   ├── about.js
│   │   ├── achievements.js
│   │   ├── certifications.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── home.js
│   │   ├── personal.js
│   │   ├── projects.js
│   │   ├── resume.js
│   │   └── skills.js
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/personal.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "Your Location",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};
```

### Projects
Add or modify projects in `src/data/projects.js`:
```javascript
{
  id: 1,
  title: "Project Title",
  description: "Project description",
  features: ["Feature 1", "Feature 2"],
  tech: ["React", "TypeScript"],
  image: "/data/images/projects/project-image.png"
}
```

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Components**: Update component styles in respective files
- **Theme**: Customize dark/light theme colors

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking

# Package Management
npm install          # Install dependencies
npm update           # Update dependencies
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

- No sensitive data in client-side code
- Secure form handling with proper validation
- HTTPS recommended for production
- Regular dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kumbham Ajay Goud**
- Email: ajaygoud.kumbham@gmail.com
- LinkedIn: [Kumbham Ajay Goud](https://www.linkedin.com/in/kumbham-ajay-goud/)
- GitHub: [@AjayKumbham](https://github.com/AjayKumbham/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide](https://lucide.dev/) - Icons
- [FormSubmit](https://formsubmit.co/) - Contact form handling

---

⭐ If you found this portfolio helpful, please give it a star!



