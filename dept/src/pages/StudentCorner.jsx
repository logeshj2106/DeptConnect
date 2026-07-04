import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Users, Trophy, Star, Sparkles } from 'lucide-react'

const clubs = [
    { name: 'CodersHub', type: 'Coding Club', members: 120, desc: 'Competitive programming, hackathons, open source.', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'DevCircle', type: 'Development Club', members: 85, desc: 'Web and mobile app development projects.', icon: Code2, color: 'from-violet-500 to-purple-500' },
    { name: 'AI Society', type: 'Research Club', members: 60, desc: 'AI/ML research, reading groups, projects.', icon: Star, color: 'from-teal-500 to-green-500' },
    { name: 'Cipher Squad', type: 'Cyber Security', members: 45, desc: 'CTF competitions, ethical hacking practice.', icon: Trophy, color: 'from-orange-500 to-red-500' },
]

const alumni = [
    { name: 'Aakash Ramesh', batch: '2018', company: 'Google', role: 'Software Engineer', package: '₹42 LPA' },
    { name: 'Keerthi Suresh', batch: '2019', company: 'Microsoft', role: 'Senior Dev', package: '₹38 LPA' },
    { name: 'Naveen Kumar', batch: '2017', company: 'Startup (YC funded)', role: 'CTO & Co-Founder', package: '—' },
    { name: 'Dhivya Priya', batch: '2020', company: 'Amazon', role: 'SDE-II', package: '₹28 LPA' },
]

export default function StudentCorner() {
    return (
        <div className="pt-20">
            <section className="section-pad bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(20,184,166,0.15)_0%,_transparent_50%)]" />
                <motion.div 
                    className="absolute bottom-0 left-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px]"
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
                            Student <span className="gradient-text">Corner</span>
                        </motion.h1>
                        <motion.p 
                            className="text-slate-400 text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Clubs, communities, and alumni success stories.
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
                        Student <span className="gradient-text">Clubs</span>
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Join a community and grow beyond academics
                    </motion.p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {clubs.map((club, i) => (
                            <motion.div 
                                key={club.name} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} 
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-card p-6 hover:border-white/20 transition-all hover-lift glow-border"
                            >
                                <motion.div 
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${club.color} flex items-center justify-center mb-4`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <club.icon className="w-7 h-7 text-white" />
                                </motion.div>
                                <h3 className="text-white font-bold font-heading mb-1">{club.name}</h3>
                                <p className="text-accent-blue text-xs mb-2">{club.type}</p>
                                <p className="text-slate-400 text-sm mb-3">{club.desc}</p>
                                <div className="flex items-center gap-1 text-slate-500 text-xs">
                                    <Users className="w-3 h-3" />{club.members} members
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Alumni <span className="gradient-text">Success</span>
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our graduates making a difference worldwide
                    </motion.p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {alumni.map((a, i) => (
                            <motion.div 
                                key={a.name} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} 
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-card p-6 hover:border-accent-violet/30 transition-all hover-lift glow-border"
                            >
                                <motion.div 
                                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-violet to-accent-blue flex items-center justify-center text-white font-bold font-heading text-xl mb-4"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {a.name[0]}{a.name.split(' ')[1][0]}
                                </motion.div>
                                <h3 className="text-white font-semibold font-heading">{a.name}</h3>
                                <p className="text-accent-blue text-xs mt-0.5">{a.company} — {a.role}</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-slate-500 text-xs">Batch {a.batch}</span>
                                    <span className="text-green-400 text-xs font-semibold">{a.package}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
