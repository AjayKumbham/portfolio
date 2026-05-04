import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personal';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/personal-logo.jpg"
                alt="Ajay Kumbham Logo"
                className="w-12 h-12 rounded-xl object-cover border border-border shadow-sm"
              />
              <h3 className="text-2xl font-heading font-bold text-foreground tracking-tight">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Software Engineer specializing in building scalable architectures, intuitive interfaces, and production-grade applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest font-heading">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 lg:col-span-5 space-y-6 lg:pl-12">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest font-heading">
              Connect & Contact
            </h4>
            
            <div className="flex gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-red-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <div className="space-y-1 mt-6">
              <p className="text-muted-foreground font-medium">{personalInfo.email}</p>
              <p className="text-muted-foreground/70 text-sm">{personalInfo.location}</p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground/60 flex items-center gap-2">
            Crafted with precision <span className="text-red-500 animate-pulse">❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
