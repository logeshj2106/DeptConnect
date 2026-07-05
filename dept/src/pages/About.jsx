import React from 'react'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Award, Clock, Sparkles } from 'lucide-react'

const timeline = [
    { year: '2004', event: 'Department established with 60 UG seats' },
    { year: '2008', event: 'PG program (M.E. CSE) introduced' },
    { year: '2012', event: 'PhD program launched with research labs' },
    { year: '2016', event: 'NBA Accreditation achieved' },
    { year: '2019', event: 'AI & Cloud Computing labs inaugurated' },
    { year: '2022', event: 'Cyber Security Centre of Excellence established' },
    { year: '2024', event: '95%+ placement record achieved' },
]

export default function About() {
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
                            About Us
                        </motion.div>
                        <motion.h1 
                            className="text-5xl font-serif font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            About the Department
                        </motion.h1>
                        <motion.p 
                            className="text-gray-600 text-xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Two decades of excellence in Computer Science & Engineering education, research, and industry connect.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section id="vision" className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Vision & Mission
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our guiding principles
                    </motion.p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            className="bg-white p-8 rounded shadow border-l-4 border-blue-600 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center"
                                    whileHover={{ rotate: 15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Target className="w-6 h-6 text-blue-600" />
                                </motion.div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900">Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg italic">
                                "To be a world-class center of excellence in Computer Science and Engineering education, research, and innovation, producing globally competent engineers and researchers."
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            className="bg-white p-8 rounded shadow border-l-4 border-indigo-600 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    className="w-12 h-12 rounded bg-indigo-100 flex items-center justify-center"
                                    whileHover={{ rotate: 15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Lightbulb className="w-6 h-6 text-indigo-600" />
                                </motion.div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900">Mission</h3>
                            </div>
                            <ul className="text-gray-700 leading-relaxed space-y-3">
                                {[
                                    'Impart quality education through innovative teaching methodologies.',
                                    'Foster research culture and encourage publications.',
                                    'Provide industry-oriented training and internships.',
                                    'Develop ethical, responsible, and technically sound engineers.',
                                ].map((m, i) => (
                                    <motion.li 
                                        key={i} 
                                        className="flex items-start gap-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="text-indigo-600 mt-1">▸</span> {m}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="hod" className="section-pad bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        HoD's Message
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        A word from our department head
                    </motion.p>
                    <motion.div 
                        className="bg-white p-10 max-w-4xl mx-auto rounded shadow border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <motion.div 
                                className="flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                <div className="w-28 h-28 bg-blue-600 flex items-center justify-center text-white font-bold text-3xl rounded">
                                    RK
                                </div>
                            </motion.div>
                            <div>
                                <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">
                                    "It gives me immense pleasure to present the CSE Department — a vibrant hub of learning, innovation, and growth. Our faculty are dedicated mentors, our students are passionate learners, and together, we strive to make a meaningful impact on the world of computing. I welcome students to join our community and be part of our journey towards excellence."
                                </blockquote>
                                <div>
                                    <p className="text-gray-900 font-bold text-xl">Dr. R. Krishnamurthy</p>
                                    <p className="text-blue-600">Professor & Head, Department of CSE</p>
                                    <p className="text-gray-500 text-sm mt-1">Ph.D (CSE), IIT Madras | 22 Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="history" className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Department History
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our journey through the years
                    </motion.p>
                    <div className="relative max-w-3xl mx-auto">
                        <motion.div 
                            className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        />
                        <div className="space-y-8">
                            {timeline.map(({ year, event }, i) => (
                                <motion.div 
                                    key={year} 
                                    initial={{ opacity: 0, x: -30 }} 
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15 }} 
                                    viewport={{ once: true }}
                                    className="flex items-start gap-6 pl-4"
                                >
                                    <motion.div 
                                        className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0 rounded"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 200 }}
                                    >
                                        <Clock className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <div 
                                        className="bg-white p-4 flex-1 rounded shadow hover:shadow-md transition-all"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="text-blue-600 font-bold text-xl">{year}</span>
                                        <p className="text-gray-700 mt-1">{event}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-pad bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Accreditations & Recognition
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Recognized for excellence
                    </motion.p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['NBA Accredited', 'NAAC A+', 'ISO 9001:2015', 'AICTE Approved'].map((item, i) => (
                            <motion.div 
                                key={item} 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="bg-white p-6 rounded shadow text-center hover:shadow-lg transition-all border border-gray-100"
                            >
                                <motion.div
                                    whileHover={{ rotate: 15 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                </motion.div>
                                <p className="text-gray-900 font-semibold">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
