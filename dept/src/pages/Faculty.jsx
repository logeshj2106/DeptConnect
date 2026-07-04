import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, BookOpen, Award, Sparkles } from 'lucide-react'
import { faculty } from '../data/data'

const categories = ['All', 'Professor', 'Associate Professor', 'Assistant Professor']

function FacultyModal({ member, onClose }) {
    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0, y: 50 }} 
                    animate={{ scale: 1, opacity: 1, y: 0 }} 
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="bg-white w-full max-w-md p-8 rounded-lg shadow-xl relative border border-gray-200"
                    onClick={e => e.stopPropagation()}
                >
                    <motion.button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700 transition-all"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <X className="w-5 h-5" />
                    </motion.button>
                    <motion.div 
                        className="flex items-start gap-4 mb-6"
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <motion.div 
                            className="w-16 h-16 bg-blue-600 flex items-center justify-center text-white font-bold text-xl rounded"
                            whileHover={{ scale: 1.1 }}
                        >
                            {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </motion.div>
                        <div>
                            <h3 className="text-gray-900 font-bold text-lg">{member.name}</h3>
                            <p className="text-blue-600 text-sm">{member.designation}</p>
                            <p className="text-gray-500 text-xs mt-1">{member.qualification}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="space-y-3"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-gray-50 p-3 rounded flex items-center gap-3">
                            <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <div>
                                <p className="text-gray-500 text-xs">Specialization</p>
                                <p className="text-gray-900 text-sm">{member.specialization}</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded flex items-center gap-3">
                            <Award className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                            <div>
                                <p className="text-gray-500 text-xs">Experience & Publications</p>
                                <p className="text-gray-900 text-sm">{member.experience} | {member.publications} Papers</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded flex items-center gap-3">
                            <Mail className="w-4 h-4 text-teal-600 flex-shrink-0" />
                            <div>
                                <p className="text-gray-500 text-xs">Email</p>
                                <p className="text-gray-900 text-sm">{member.email}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default function Faculty() {
    const [active, setActive] = useState('All')
    const [selected, setSelected] = useState(null)

    const filtered = active === 'All' ? faculty : faculty.filter(f => f.category === active)

    return (
        <div className="pt-20">
            <section className="section-pad bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <motion.div 
                            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded px-4 py-1.5 text-blue-700 text-sm font-medium mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-4 h-4" />
                            Our Team
                        </motion.div>
                        <motion.h1 
                            className="text-5xl font-serif font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Meet Our Faculty
                        </motion.h1>
                        <motion.p 
                            className="text-gray-600 text-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Experienced educators, active researchers, and passionate mentors shaping the next generation.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat, i) => (
                            <motion.button 
                                key={cat} 
                                onClick={() => setActive(cat)}
                                className={`px-5 py-2.5 rounded font-medium text-sm transition-all duration-200 ${active === cat
                                        ? 'bg-blue-600 text-white shadow'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>

                    <motion.div 
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        layout
                    >
                        {filtered.map((member, i) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.07 }}
                                layout
                                onClick={() => setSelected(member)}
                                className="bg-white p-6 rounded shadow border border-gray-100 cursor-pointer hover:shadow-lg transition-all duration-200 group"
                                whileHover={{ y: -3 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <motion.div 
                                        className="w-14 h-14 bg-blue-600 flex items-center justify-center text-white font-bold text-lg rounded"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                    </motion.div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">{member.name}</h3>
                                        <p className="text-blue-600 text-sm">{member.designation}</p>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600"><span className="text-gray-400">Qual:</span> {member.qualification}</p>
                                    <p className="text-gray-600"><span className="text-gray-400">Specialization:</span> {member.specialization}</p>
                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                        <span className="text-gray-500 text-xs">{member.experience}</span>
                                        <span className="text-blue-600 text-xs font-medium">{member.publications} Publications</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {selected && <FacultyModal member={selected} onClose={() => setSelected(null)} />}
        </div>
    )
}
