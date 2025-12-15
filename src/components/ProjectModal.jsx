import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[var(--background)] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-[var(--secondary)]/20 relative"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-[var(--background)]/80 text-[var(--text)] hover:text-red-500 transition-colors z-10"
                    >
                        <FaTimes size={24} />
                    </button>

                    <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-80"></div>
                        <div className="absolute bottom-6 left-6">
                            <h2 className="text-3xl font-bold text-[var(--text)] mb-2">{project.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1 text-sm bg-[var(--primary)]/20 text-[var(--primary)] rounded-full border border-[var(--primary)]/30">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-[var(--text)] mb-2">Description</h3>
                            <p className="text-[var(--secondary)] leading-relaxed">
                                {project.description}
                            </p>
                            <p className="text-[var(--secondary)] leading-relaxed mt-2">
                                This project solves real-world problems by integrating advanced MERN stack capabilities. 
                                (Static placeholder text for "Problem it solves" if not in JSON, or use project.description extended).
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-[var(--text)] mb-3">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-[var(--secondary)] marker:text-[var(--primary)]">
                                {project.features && project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-[var(--primary)]/20"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                            {project.repoLinks ? (
                                <>
                                    <a 
                                        href={project.repoLinks.frontend} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--secondary)] text-[var(--text)] font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                                    >
                                        <FaGithub size={20} /> Frontend
                                    </a>
                                    <a 
                                        href={project.repoLinks.backend} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--secondary)] text-[var(--text)] font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                                    >
                                        <FaGithub size={20} /> Backend
                                    </a>
                                </>
                            ) : (
                                <a 
                                    href={project.repoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--secondary)] text-[var(--text)] font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
                                >
                                    <FaGithub size={20} /> View Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
