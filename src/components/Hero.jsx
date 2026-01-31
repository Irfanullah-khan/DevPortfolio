import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/irfan.jpeg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[var(--background)] to-[var(--secondary)]/10 pt-20 md:pt-0">
            {/* Background Blob Animations */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-[var(--primary)] mb-4">
                        Welcome, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[var(--text)]">
                        Irfanullah Khan
                    </h1>
                    
                    <div className="text-2xl md:text-4xl font-semibold mb-8 h-[60px] text-[var(--secondary)] flex justify-center md:justify-start">
                        <TypeAnimation
                            sequence={[
                                'Full Stack MERN Developer',
                                1000,
                                'CS Student',
                                1000,
                                'React Enthusiast',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-lg text-[var(--secondary)] mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                       I build exceptional digital experiences that stand out. Passionate about crafting clean, modern, and high-performance web applications using the MERN stack and modern web technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
                        <a 
                            href="#projects" 
                            className="px-8 py-3 rounded-full bg-[var(--primary)] text-white font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-[var(--primary)]/30 transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>

                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/CV.pdf';
                                link.download = 'Irfanullah_Khan_CV.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="px-8 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-medium hover:bg-[var(--primary)] hover:text-white transition-all shadow-lg hover:shadow-[var(--primary)]/30 transform hover:-translate-y-1"
                        >
                            Download CV
                        </button>
                    </div>


                </motion.div>

                {/* Profile Image with Dynamic Effects */}
                <motion.div 
                    className="flex-1 flex justify-center items-center relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Spinning Gradient Border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full blur opacity-75 animate-pulse"></div>
                        
                        {/* Floating Image Container */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--background)] shadow-2xl"
                        >
                            <img 
                                src={profileImage} 
                                alt="Irfanullah Khan" 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                            />
                            {/* Glass overlay effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>

                        {/* Orbiting Elements (Optional decorative circles) */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-8 border border-[var(--primary)]/20 rounded-full border-dashed"
                        />
                         <motion.div 
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-16 border border-[var(--accent)]/10 rounded-full border-dotted"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
