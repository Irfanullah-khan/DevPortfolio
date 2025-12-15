import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'BS Computer Science',
      institution: 'COMSATS University, Abbottabad Campus',
      period: '2023 - Present',
      description: 'Eagerly acquiring comprehensive knowledge of Computer Science and Software Engineering fundamentals. Maintaining a CGPA of 3.8/4.0.',
    },
    {
      id: 3,
      type: 'education',
      title: 'Computer Science Fundamentals',
      institution: 'University / Self-Study',
      period: '2023 - Present',
      description: 'Gained in-depth knowledge of Databases, Networks, Data Structures & Algorithms (DSA), AI, OOP, and Operating Systems.',
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      institution: 'Self-Directed Projects',
      period: '2023 - Present',
      description: 'Architected full-stack web solutions using MERN (MongoDB, Express, React, Node.js). Proficient in HTML, CSS, Tailwind CSS, JavaScript (ES6+), and SQL/NoSQL databases.',
    },
    {
      id: 4,
      type: 'work',
      title: 'Desktop Application Developer',
      institution: 'Self-Directed Projects',
      period: '2023 - Present',
      description: 'Developed functional desktop applications using C# and .NET framework, focusing on user interface design and core logic.',
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-[var(--background)] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-[var(--secondary)]/20 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Timeline Dot (Mobile: Left, Desktop: Center logic if alternating, but here keeping simple left-aligned list with margin for dot) */}
              
              <div className="md:flex md:gap-8 md:justify-between items-start">
                  <div className="absolute -left-[9px] top-0 p-1 bg-[var(--background)] rounded-full border-2 border-[var(--primary)] text-[var(--primary)] z-10">
                    {exp.type === 'education' ? <FaGraduationCap size={16} /> : <FaBriefcase size={16} />}
                  </div>

                  <div className="md:w-1/4 mb-2 md:mb-0">
                    <span className="text-sm font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="md:w-3/4 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--background)] p-6 rounded-2xl border border-[var(--primary)]/10 hover:border-[var(--primary)]/30 transition-all shadow-md hover:shadow-[var(--primary)]/20 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                    <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">{exp.title}</h3>
                    <h4 className="text-[var(--secondary)] font-medium mb-4">{exp.institution}</h4>
                    <p className="text-[var(--secondary)] text-sm leading-relaxed relative z-10">
                      {exp.description}
                    </p>
                  </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
