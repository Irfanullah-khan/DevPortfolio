import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--background)]/80 backdrop-blur-md border-t border-[var(--secondary)]/20 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              DevPortfolio
            </h2>
            <p className="text-[var(--secondary)] text-sm mt-1">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/Irfanullah-khan" target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/irfanullah-khan-802605336/" target="_blank" rel="noopener noreferrer" className="text-[var(--text)] hover:text-[var(--primary)] transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:irfanullah137298@gmail.com" className="group flex items-center space-x-2 text-[var(--text)] hover:text-[var(--primary)] transition-colors">
              <FaEnvelope size={20} />
              <span className="hidden md:inline group-hover:underline">irfanullah137298@gmail.com</span>
            </a>
          </div>

          <div className="text-[var(--secondary)] text-sm flex items-center">
            <p>© {new Date().getFullYear()} Made with </p>
            <FaHeart className="mx-1 text-red-500" />
            <p>by Me</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
