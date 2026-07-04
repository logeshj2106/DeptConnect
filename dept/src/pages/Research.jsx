import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Award, Lightbulb, DollarSign, Sparkles } from 'lucide-react'

const publications = [
    { title: 'Deep Learning for Medical Image Segmentation', authors: 'Dr. Krishnamurthy, Dr. Meenakshi', journal: 'IEEE TMI', year: 2024, type: 'Journal' },
    { title: 'Blockchain-based IoT Security Framework', authors: 'Dr. Arumugam, Ms. Kavitha', journal: 'Elsevier Future Generation', year: 2024, type: 'Journal' },
    { title: 'Federated Learning for Edge Computing', authors: 'Mr. Venkatesh', journal: 'ICML 2024', year: 2024, type: 'Conference' },
    { title: 'NLP-based Sentiment Agriculture Decision System', authors: 'Dr. Meenakshi', journal: 'Applied Soft Computing', year: 2023, type: 'Journal' },
]

const projects = [
    { title: 'AI-based Crop Disease Detection', agency: 'DST', amount: '₹18.5 Lakhs', pi: 'Dr. Krishnamurthy', year: '2023-2025' },
    { title: 'Blockchain for Supply Chain', agency: 'SERB', amount: '₹12.2 Lakhs', pi: 'Dr. Arumugam', year: '2022-2024' },
    { title: 'Smart Campus IoT Security', agency: 'AICTE', amount: '₹8.0 Lakhs', pi: 'Dr. Meenakshi', year: '2023-2025' },
]

export default function Research() {
    return (
        <div className="pt-20">
            <section className="section-pad bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.15)_0%,_transparent_60%)]" />
                <motion.div 
                    className="absolute top-0 left-1/2 w-96 h-96 bg-accent-violet/10 rounded-full blur-[120px] -translate-x-1/2"
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
                            Research & <span className="gradient-text">Achievements</span>
                        </motion.h1>
                        <motion.p 
                            className="text-slate-400 text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Pioneering research across AI, cybersecurity, IoT, and emerging technologies.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section-pad bg-primary-light/50 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.1)_0%,_transparent_50%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { label: 'Publications', value: '100+', icon: FileText, color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
                            { label: 'Funded Projects', value: '12', icon: DollarSign, color: 'text-teal-400', bgColor: 'bg-teal-500/20' },
                            { label: 'Patents', value: '8', icon: Lightbulb, color: 'text-violet-400', bgColor: 'bg-violet-500/20' },
                            { label: 'Awards', value: '25+', icon: Award, color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
                        ].map(({ label, value, icon: Icon, color, bgColor }, i) => (
                            <motion.div 
                                key={label} 
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <motion.div 
                                    className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon className={`w-6 h-6 ${color}`} />
                                </motion.div>
                                <p className="text-3xl font-bold font-heading gradient-text">{value}</p>
                                <p className="text-slate-300">{label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h2 
                        className="section-title mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Recent <span className="gradient-text">Publications</span>
                    </motion.h2>
                    <div className="space-y-4 mb-16">
                        {publications.map((pub, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: -30 }} 
                                whileInView={{ opacity: 1, x: 0 }} 
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6 flex items-start gap-4 hover:border-accent-blue/30 transition-all hover-lift glow-border"
                                whileHover={{ x: 5 }}
                            >
                                <div className={`text-xs px-2 py-1 rounded-lg font-medium flex-shrink-0 ${pub.type === 'Journal' ? 'bg-blue-500/20 text-blue-400' : 'bg-violet-500/20 text-violet-400'}`}>
                                    {pub.type}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold font-heading">{pub.title}</h3>
                                    <p className="text-slate-400 text-sm mt-1">{pub.authors}</p>
                                    <p className="text-accent-blue text-sm mt-1">{pub.journal} • {pub.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h2 
                        className="section-title mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Funded <span className="gradient-text">Projects</span>
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((proj, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }} 
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 hover:border-accent-teal/30 transition-all hover-lift glow-border"
                            >
                                <h3 className="text-white font-semibold font-heading mb-3">{proj.title}</h3>
                                <div className="space-y-2 text-sm">
                                    <p className="text-slate-400"><span className="text-slate-500">Agency:</span> <span className="text-accent-teal">{proj.agency}</span></p>
                                    <p className="text-slate-400"><span className="text-slate-500">Amount:</span> <span className="text-green-400 font-semibold">{proj.amount}</span></p>
                                    <p className="text-slate-400"><span className="text-slate-500">PI:</span> {proj.pi}</p>
                                    <p className="text-slate-400"><span className="text-slate-500">Period:</span> {proj.year}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
