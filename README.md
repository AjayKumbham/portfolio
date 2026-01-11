# Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://ajaykumbham.vercel.app/)
[![React](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-3.3.0-blue)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> A modern, high-performance portfolio website built with React, TypeScript, and Tailwind CSS.

**Live Site:** [ajaykumbham.vercel.app](https://ajaykumbham.vercel.app/)

---

## Performance

![PageSpeed Insights Report](public/data/images/pagespeed-report.png)

**Google PageSpeed Insights Scores:**
- Performance: **95/100**
- Accessibility: **96/100**
- Best Practices: **100/100**
- SEO: **100/100**

[View Full Report](https://pagespeed.web.dev/analysis/https-ajaykumbham-vercel-app/6bpwhyeoxb?form_factor=desktop)

---

## Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark/Light Mode** - Theme toggle with persistent preference
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Fast Performance** - Optimized assets and lazy loading
- **Accessible** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Proper meta tags and semantic HTML

---

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/AjayKumbham/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

---

## Tech Stack

**Frontend**
- React 18.2 - UI library
- TypeScript 5.0 - Type safety
- Tailwind CSS 3.3 - Styling
- Vite 4.4 - Build tool

**Tools & Libraries**
- Lucide React - Icons
- React Router - Navigation
- PostCSS - CSS processing

---

## Project Structure

```
portfolio/
├── public/
│   └── data/
│       ├── documents/       # Resume PDF
│       └── images/          # Project images, certificates
├── src/
│   ├── components/          # Reusable UI components
│   ├── contexts/            # React contexts (theme)
│   ├── data/                # Static content (projects, skills, etc.)
│   ├── pages/               # Page components
│   └── App.tsx
├── package.json
└── vite.config.ts
```

---

## Customization

### Update Content

Edit files in `src/data/` to customize:
- `personal.js` - Name, bio, social links
- `projects.js` - Project showcase
- `skills.js` - Technical skills
- `experience.js` - Work history
- `certifications.js` - Certifications

### Update Assets

Replace files in `public/data/`:
- `images/professional-profile.png` - Profile photo
- `documents/resume.pdf` - Resume PDF
- `images/projects/` - Project screenshots

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Drag & drop `dist/` folder
- **GitHub Pages:** Use GitHub Actions
- **Any Static Host:** Upload `dist/` folder

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

**Kumbham Ajay Goud**

- Email: ajaygoud.kumbham@gmail.com
- LinkedIn: [kumbham-ajay-goud25](https://www.linkedin.com/in/kumbham-ajay-goud25/)
- GitHub: [@AjayKumbham](https://github.com/AjayKumbham/)

---

## Acknowledgments

Built with:
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

---

<div align="center">

**If you found this helpful, please give it a star!**

</div>
