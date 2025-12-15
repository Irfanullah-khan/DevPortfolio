import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectsData from '../data/projects.js';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="min-h-screen py-20 bg-[var(--background)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-[var(--secondary)]/5 rounded-2xl overflow-hidden border border-[var(--secondary)]/10 hover:border-[var(--primary)]/50 transition-all hover:shadow-xl hover:shadow-[var(--primary)]/10 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <span className="text-white font-medium px-4 py-2 border border-white rounded-full">View Details</span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--secondary)] text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-xs px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-md border border-[var(--primary)]/20">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs px-2 py-1 text-[var(--secondary)]">+{project.techStack.length - 3}</span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <button className="text-sm font-medium text-[var(--primary)] flex items-center gap-1 hover:underline">
                                        Read More
                                    </button>
                                    <div className="flex gap-3">
                                        {project.repoLinks ? (
                                            <>
                                                <a href={project.repoLinks.frontend} title="Frontend Code" className="text-[var(--secondary)] hover:text-[var(--text)] flex items-center gap-1" onClick={e => e.stopPropagation()}>
                                                    <FaGithub size={18} /> <span className="text-xs">FE</span>
                                                </a>
                                                <a href={project.repoLinks.backend} title="Backend Code" className="text-[var(--secondary)] hover:text-[var(--text)] flex items-center gap-1" onClick={e => e.stopPropagation()}>
                                                    <FaGithub size={18} /> <span className="text-xs">BE</span>
                                                </a>
                                            </>
                                        ) : (
                                            <a href={project.repoLink} className="text-[var(--secondary)] hover:text-[var(--text)]" onClick={e => e.stopPropagation()}>
                                                <FaGithub size={18} />
                                            </a>
                                        )}
                                        <a href={project.liveLink} className="text-[var(--secondary)] hover:text-[var(--text)]" onClick={e => e.stopPropagation()}>
                                            <FaExternalLinkAlt size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default Projects;
