import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCoursera, SiCisco, SiHuawei } from 'react-icons/si';
import certificationsData from '../data/certifications';

const Certifications = () => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'coursera': return <SiCoursera size={40} className="text-blue-500" />;
            case 'cisco': return <SiCisco size={40} className="text-cyan-500" />;
            case 'huawei': return <SiHuawei size={40} className="text-red-500" />;
            default: return <FaCertificate size={40} className="text-[var(--primary)]" />;
        }
    };

    return (
        <section id="certifications" className="min-h-screen py-20 bg-[var(--secondary)]/5 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-4">
                        Certifications
                    </h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-[var(--background)] rounded-2xl p-8 border border-[var(--secondary)]/10 shadow-lg hover:shadow-[var(--primary)]/20 transition-all relative overflow-hidden group"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--primary)]/10 transition-colors"></div>

                            <div className="flex flex-col h-full">
                                <div className="mb-6 bg-[var(--secondary)]/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {getIcon(cert.icon)}
                                </div>
                                
                                <h3 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                    {cert.title}
                                </h3>
                                
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-semibold text-[var(--secondary)]">{cert.issuer}</span>
                                    <span className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded-full border border-[var(--accent)]/20">
                                        {cert.date}
                                    </span>
                                </div>

                                <p className="text-[var(--secondary)] text-sm mb-6 leading-relaxed flex-grow">
                                    {cert.description}
                                </p>

                                <a 
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors mt-auto group/link"
                                >
                                    Verify Credential 
                                    <FaExternalLinkAlt size={12} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
