import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaBolt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Experience', href: '#experience' },
  ];

  const handleThemeChange = () => {
    if (theme === 'light') toggleTheme('dark');
    else if (theme === 'dark') toggleTheme('neon');
    else toggleTheme('light');
  };

  const getThemeIcon = () => {
    if (theme === 'light') return <FaMoon className="text-secondary" />;
    if (theme === 'dark') return <FaBolt className="text-yellow-400" />;
    return <FaSun className="text-orange-500" />;
  };

  return (
    <nav className="fixed w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--secondary)]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              DevPortfolio
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-[var(--text)] hover:text-[var(--primary)] transition-colors px-3 py-2 rounded-md font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeChange}
              className="p-2 rounded-full hover:bg-[var(--secondary)]/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {getThemeIcon()}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--text)] hover:text-[var(--primary)] p-2"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)] border-b border-[var(--secondary)]/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text)] hover:text-[var(--primary)] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
