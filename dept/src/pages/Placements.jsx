import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Award, Briefcase, Sparkles } from 'lucide-react'
import { placementStats, recruiters } from '../data/data'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

export default function Placements() {
    return (
        <div className="pt-20">
            <section className="section-pad bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.15)_0%,_transparent_50%)]" />
                <motion.div 
                    className="absolute top-1/4 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"
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
                            Placements & <span className="gradient-text">Industry</span>
                        </motion.h1>
                        <motion.p 
                            className="text-slate-400 text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Connecting talent with opportunity — 95%+ placement consistently.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section-pad bg-primary-light/50 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.1)_0%,_transparent_50%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { label: 'Placement Rate', value: '95%', color: 'text-teal-400', bgColor: 'bg-teal-500/20' },
                            { label: 'Avg Package', value: '7.2 LPA', color: 'text-blue-400', bgColor: 'bg-blue-500/20' },
                            { label: 'Highest Package', value: '32 LPA', color: 'text-violet-400', bgColor: 'bg-violet-500/20' },
                            { label: 'Companies', value: '80+', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
                        ].map(({ label, value, color, bgColor }, i) => (
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
                                    <TrendingUp className={`w-6 h-6 ${color}`} />
                                </motion.div>
                                <p className={`text-3xl font-bold font-heading ${color} mb-2`}>{value}</p>
                                <p className="text-slate-300 text-sm">{label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div 
                            className="glass-card p-6 hover-lift glow-border"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-white font-heading font-semibold mb-4">Placement % Trend</h3>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={placementStats}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="year" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#f8fafc' }} />
                                    <Bar dataKey="percentage" fill="#0ea5e9" radius={[4, 4, 0, 0]}>
                                        {placementStats.map((entry, index) => (
                                            <motion.rect 
                                                key={`cell-${index}`} 
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </motion.div>
                        <motion.div 
                            className="glass-card p-6 hover-lift glow-border"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-white font-heading font-semibold mb-4">Avg Package (LPA) Trend</h3>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={placementStats}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="year" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#f8fafc' }} />
                                    <Bar dataKey="avgPackage" fill="#7c3aed" radius={[4, 4, 0, 0]}>
                                        {placementStats.map((entry, index) => (
                                            <motion.rect 
                                                key={`cell-${index}`} 
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </motion.div>
                    </div>

                    <motion.h2 
                        className="section-title mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="gradient-text">Recruiters</span>
                    </motion.h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {recruiters.map((name, i) => (
                            <motion.div 
                                key={name} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="glass-card p-4 flex items-center justify-center hover:border-accent-blue/40 transition-all duration-300"
                            >
                                <span className="text-white font-bold font-heading text-sm text-center">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
