import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  const formatName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              {isLast ? (
                <span className="text-gray-900 dark:text-white font-medium">
                  {formatName(name)}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {formatName(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
