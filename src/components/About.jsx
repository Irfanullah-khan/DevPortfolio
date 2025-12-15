import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
    // Variants for the left column (Text content) - Sliding in from Left
    const leftContainerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                bounce: 0.4,
                type: "spring",
                staggerChildren: 0.2
            }
        }
    };

    // Variants for the right column (Cards) - Sliding in from Right
    const rightContainerVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                bounce: 0.4,
                type: "spring",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about" className="min-h-screen py-20 bg-[var(--background)] flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={leftContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-[var(--text)]">
                            Passionate Full Stack Developer & CS Student
                        </motion.h3>
                        <motion.p variants={itemVariants} className="text-[var(--secondary)] leading-relaxed text-lg">
                            I am currently pursuing a degree in Computer Science, driven by a strong curiosity about how digital systems work. This curiosity led me to explore full-stack web development, where I have gained hands-on experience with the MERN stack and modern web technologies.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-[var(--secondary)] leading-relaxed text-lg">
                            Beyond web development, I am actively learning and expanding my skills in desktop application development, aiming to build powerful, efficient, and user-friendly software solutions. I enjoy solving complex problems and transforming ideas into scalable applications that deliver real-world value.
                        </motion.p>
                        <motion.p variants={itemVariants} className="text-[var(--secondary)] leading-relaxed text-lg">
My goal is to continuously learn, grow, and work on challenging projects that push the boundaries of both web and desktop application development.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                            <motion.div 
                                whileHover={{ scale: 1.05, borderColor: 'rgba(var(--primary-rgb), 0.5)' }}
                                className="flex flex-col items-center bg-[var(--secondary)]/5 p-4 rounded-xl border border-[var(--secondary)]/10 transition-colors cursor-default"
                            >
                                <span className="text-3xl font-bold text-[var(--primary)]">3+</span>
                                <span className="text-sm text-[var(--secondary)]">Years Coding</span>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05, borderColor: 'rgba(var(--accent-rgb), 0.5)' }}
                                className="flex flex-col items-center bg-[var(--secondary)]/5 p-4 rounded-xl border border-[var(--secondary)]/10 transition-colors cursor-default"
                            >
                                <span className="text-3xl font-bold text-[var(--accent)]">10+</span>
                                <span className="text-sm text-[var(--secondary)]">Projects</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Info Cards */}
                    <motion.div
                        variants={rightContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 gap-6"
                    >
                        {[
                            {
                                icon: <FaGraduationCap size={24} />,
                                color: "text-[var(--primary)]",
                                bg: "bg-[var(--primary)]/10",
                                title: "Education",
                                subtitle: "BS Computer Science",
                                desc: "Comsats University, 2023 - 2027"
                            },
                            {
                                icon: <FaRocket size={24} />,
                                color: "text-[var(--accent)]",
                                bg: "bg-[var(--accent)]/10",
                                title: "Career Goals",
                                desc: "Aspiring to become a expert Full Stack Architect, contributing to open-source, and building impactful products."
                            },
                            {
                                icon: <FaCode size={24} />,
                                color: "text-green-500",
                                bg: "bg-green-500/10",
                                title: "Current Focus",
                                desc: "Mastering Advanced React Patterns, System Design, and Cloud Architecture."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, x: -5 }}
                                className="bg-gradient-to-br from-[var(--secondary)]/5 to-[var(--background)] p-6 rounded-2xl border border-[var(--secondary)]/10 hover:border-[var(--primary)]/30 transition-all shadow-sm hover:shadow-lg hover:shadow-[var(--primary)]/10 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className={`p-3 ${item.bg} rounded-lg ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">{item.title}</h4>
                                    </div>
                                    {item.subtitle && <p className="text-[var(--text)] font-medium">{item.subtitle}</p>}
                                    <p className="text-[var(--secondary)]">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
