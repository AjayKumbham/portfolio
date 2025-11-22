
import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Breadcrumbs from './Breadcrumbs';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main className="pt-16">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
