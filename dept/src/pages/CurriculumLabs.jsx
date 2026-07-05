import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, Cpu, Wifi, Server, Sparkles } from 'lucide-react'
import { labs } from '../data/data'

const semesters = {
    'Semester 1': ['Engineering Mathematics I', 'Physics', 'C Programming', 'Engineering Graphics'],
    'Semester 2': ['Engineering Mathematics II', 'Chemistry', 'Data Structures', 'Digital Electronics'],
    'Semester 3': ['Discrete Mathematics', 'OOPs with Java', 'Computer Architecture', 'Database Systems'],
    'Semester 4': ['Operating Systems', 'Computer Networks', 'System Software', 'Design & Analysis of Algorithms'],
    'Semester 5': ['Artificial Intelligence', 'Machine Learning', 'Software Engineering', 'Web Technologies'],
    'Semester 6': ['Cloud Computing', 'Cyber Security', 'Mobile Application Development', 'Open Elective'],
    'Semester 7': ['Deep Learning', 'Big Data Analytics', 'Professional Elective I', 'Project Phase I'],
    'Semester 8': ['Internet of Things', 'Professional Elective II', 'Project Phase II'],
}

export default function CurriculumLabs() {
    const [activeSem, setActiveSem] = useState('Semester 1')

    return (
        <div className="pt-20">
            <section className="section-pad bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15)_0%,_transparent_50%)]" />
                <motion.div 
                    className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <motion.h1 
                            className="text-5xl font-heading font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Curriculum & <span className="gradient-text">Labs</span>
                        </motion.h1>
                        <motion.p 
                            className="text-slate-400 text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Comprehensive syllabus and world-class laboratory infrastructure.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section-pad bg-primary-light/50 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.05)_0%,_transparent_50%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Course <span className="gradient-text">Curriculum</span>
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        B.E. CSE — Semester-wise subjects
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {Object.keys(semesters).map((sem, i) => (
                            <motion.button 
                                key={sem} 
                                onClick={() => setActiveSem(sem)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeSem === sem ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow' : 'glass-card text-slate-400 hover:text-white'}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {sem}
                            </motion.button>
                        ))}
                    </div>
                    <motion.div 
                        key={activeSem} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        {semesters[activeSem].map((subject, i) => (
                            <motion.div 
                                key={subject} 
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-card p-4 hover:border-accent-blue/30 transition-all hover-lift"
                            >
                                <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center text-accent-blue font-bold text-sm mb-3">
                                    {i + 1}
                                </div>
                                <p className="text-white text-sm font-medium">{subject}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="section-pad relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(124,58,237,0.1)_0%,_transparent_50%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="gradient-text">Laboratories</span>
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        State-of-the-art facilities for hands-on learning
                    </motion.p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {labs.map((lab, i) => (
                            <motion.div 
                                key={lab.name} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} 
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 hover:border-accent-blue/30 transition-all hover-lift glow-border"
                            >
                                <motion.div 
                                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Monitor className="w-6 h-6 text-white" />
                                </motion.div>
                                <h3 className="text-white font-semibold font-heading mb-2">{lab.name}</h3>
                                <div className="flex gap-4 text-sm text-slate-400 mb-3">
                                    <span><Cpu className="w-3 h-3 inline mr-1" />{lab.systems} Systems</span>
                                    <span>Est. {lab.year}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {lab.software.map((sw) => (
                                        <motion.span 
                                            key={sw} 
                                            className="text-xs bg-accent-blue/10 text-accent-blue border border-accent-blue/20 px-2 py-0.5 rounded-full"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {sw}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
