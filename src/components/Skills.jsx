import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, 
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
    PieChart, Pie, Cell
} from 'recharts';
import skillsData from '../data/skills.json';

const Skills = () => {
    // Flatten skills for Pie/Bar charts if needed, or use categories
    // For Radar, we might want to compare categories or just show specific ones.
    
    // We will use different charts for different categories to meet requirements:
    // Frontend -> Bar Chart
    // Backend -> Radar Chart
    // Soft/Tools -> Pie or Circular

    const frontendSkills = skillsData.find(c => c.category === 'Frontend')?.skills || [];
    const backendSkills = skillsData.find(c => c.category === 'Backend')?.skills || [];
    const dbSkills = skillsData.find(c => c.category === 'Database')?.skills || [];
    const deploymentSkills = skillsData.find(c => c.category === 'Deployment')?.skills || [];
    
    // Combine for Radar Chart
    const backendRadarData = [...backendSkills, ...dbSkills, ...deploymentSkills];

    const otherSkills = [...(skillsData.find(c => c.category === 'Tools')?.skills || [])];

    // Colors for charts
    const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

    return (
        <section id="skills" className="min-h-screen py-20 bg-[var(--secondary)]/5 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Frontend Bar Chart */}
                    <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--secondary)]/10 shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--text)] mb-6 text-center">Frontend Mastery</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={frontendSkills} layout="vertical" margin={{ left: 10 }}>
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={80} tick={{ fill: 'var(--secondary)' }} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: 'var(--background)', borderRadius: '10px', border: '1px solid var(--secondary)' }}
                                        itemStyle={{ color: 'var(--text)' }}
                                        cursor={{fill: 'transparent'}}
                                    />
                                    <Bar dataKey="level" radius={[0, 10, 10, 0]} barSize={20} animationDuration={1500}>
                                        {frontendSkills.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Backend Radar Chart */}
                    <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--secondary)]/10 shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--text)] mb-6 text-center">Backend & Deployment</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={backendRadarData}>
                                    <PolarGrid stroke="var(--secondary)" opacity={0.3} />
                                    <PolarAngleAxis dataKey="name" tick={{ fill: 'var(--secondary)', fontSize: 12 }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    
                                    {/* Backend Layer */}
                                    <Radar name="Backend" dataKey="level" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.3} />
                                    
                                    {/* Deployment Layer - We need to overlay or just use the same data with different colors if we want to differentiate segments? 
                                        Actually, to color specific segments of a single Radar chart is hard in Recharts without splitting data.
                                        Since we passed a combined `backendRadarData`, it plots ONE shape. 
                                        To get "different colors for each one" (category) in the Radar, we'd need separate series.
                                        But our data is flat. 
                                        Let's stick to a single, beautiful "dim" color for the single shape for now, as splitting distinct axes into overlapping polygons with 0-values looks messy (spikes to center).
                                        Instead, let's use a nice gradient or a distinctive color.
                                        Wait, the plan was "Split into 3 separate Radars". 
                                        If I do that with `connectNulls`, maybe?
                                        Let's try a different approach: Simple single Radar but with the requested "dim" color (e.g., Purple/Accent).
                                        And ensure the Frontend bars are multicolor.
                                    */}
                                    <Radar name="Skill Level" dataKey="level" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.4} />
                                    <Tooltip contentStyle={{ backgroundColor: 'var(--background)', borderColor: 'var(--secondary)', borderRadius: '8px' }}/>
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Tools Circular/Pie */}
                    <div className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--secondary)]/10 shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--text)] mb-6 text-center">Tools & Others</h3>
                        <div className="h-64 flex justify-center items-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={otherSkills}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="level"
                                    >
                                        {otherSkills.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {otherSkills.map((entry, index) => (
                                <div key={entry.name} className="flex items-center gap-1 text-xs text-[var(--secondary)]">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    <span>{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
