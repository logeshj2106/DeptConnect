import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react'
import { programs } from '../data/data'

const levelColors = {
    UG: 'from-blue-500 to-cyan-500',
    PG: 'from-violet-500 to-purple-500',
    PhD: 'from-teal-500 to-green-500',
}

export default function Programs() {
    const [active, setActive] = useState('UG')

    const filtered = programs.filter(p => p.level === active)

    const levelBgColors = {
        UG: 'bg-blue-600',
        PG: 'bg-indigo-600',
        PhD: 'bg-teal-600',
    }

    return (
        <div className="pt-20">
            <section className="section-pad bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <motion.div 
                            className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded px-4 py-1.5 text-indigo-700 text-sm font-medium mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-4 h-4" />
                            Academic Programs
                        </motion.div>
                        <motion.h1 
                            className="text-5xl font-serif font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Our Programs
                        </motion.h1>
                        <motion.p 
                            className="text-gray-600 text-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Comprehensive programs designed to build future-ready computer science professionals.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center gap-3 mb-12">
                        {['UG', 'PG', 'PhD'].map((level, i) => (
                            <motion.button 
                                key={level} 
                                onClick={() => setActive(level)}
                                className={`px-8 py-3 rounded font-semibold transition-all duration-200 ${active === level
                                        ? `${levelBgColors[level]} text-white shadow`
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {level}
                            </motion.button>
                        ))}
                    </div>

                    {filtered.map((prog, i) => (
                        <motion.div 
                            key={prog.id} 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 mb-6 max-w-4xl mx-auto rounded shadow hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <motion.div 
                                        className={`inline-block ${levelBgColors[prog.level]} text-white text-sm px-4 py-1.5 rounded font-bold mb-4`}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        {prog.level}
                                    </motion.div>
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{prog.name}</h2>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gray-50 p-4 rounded">
                                            <Clock className="w-5 h-5 text-blue-600 mb-2" />
                                            <p className="text-gray-500 text-xs mb-1">Duration</p>
                                            <p className="text-gray-900 font-semibold">{prog.duration}</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded">
                                            <Users className="w-5 h-5 text-indigo-600 mb-2" />
                                            <p className="text-gray-500 text-xs mb-1">Intake</p>
                                            <p className="text-gray-900 font-semibold">{prog.intake} Students</p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-gray-500 text-sm mb-2">Eligibility</p>
                                        <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded">{prog.eligibility}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500 text-sm mb-3">Program Highlights</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {prog.highlights.map((h) => (
                                                <motion.div 
                                                    key={h} 
                                                    className="flex items-center gap-2"
                                                    whileHover={{ x: 3 }}
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{h}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-72">
                                    <p className="text-gray-500 text-sm mb-3">Semester Structure</p>
                                    <div className="space-y-2">
                                        {Array.from({ length: prog.level === 'UG' ? 8 : prog.level === 'PG' ? 4 : 6 }, (_, i) => (
                                            <motion.div 
                                                key={i} 
                                                className="bg-gray-50 px-4 py-3 flex items-center justify-between cursor-pointer rounded hover:bg-gray-100 transition-all"
                                                whileHover={{ x: 3 }}
                                            >
                                                <span className="text-gray-700 text-sm font-medium">Semester {i + 1}</span>
                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-pad bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Regulations & Downloads
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Course regulations and academic documents
                    </motion.p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {['Regulation 2021', 'Regulation 2017', 'Syllabus B.E.', 'Syllabus M.E.'].map((doc, i) => (
                            <motion.button 
                                key={doc} 
                                className="bg-white p-4 text-gray-700 hover:text-blue-600 hover:border-blue-300 transition-all text-sm font-medium rounded shadow border border-gray-200 hover:shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                📄 {doc}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
