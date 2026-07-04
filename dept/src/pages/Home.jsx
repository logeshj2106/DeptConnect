import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    BookOpen, Users, FlaskConical, Briefcase, Trophy, Calendar,
    ArrowRight, ChevronRight, ChevronLeft, Star, Zap, Sparkles
} from 'lucide-react'
import { stats, announcements, recruiters } from '../data/data'

function Counter({ value, suffix }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                let start = 0
                const end = value
                const duration = 2000
                const step = end / (duration / 16)
                const timer = setInterval(() => {
                    start += step
                    if (start >= end) { setCount(end); clearInterval(timer) }
                    else setCount(Math.floor(start))
                }, 16)
            }
        }, { threshold: 0.5 })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [value])

    return <span ref={ref}>{count}{suffix}</span>
}

const quickLinks = [
    { label: 'Programs', icon: BookOpen, path: '/programs', color: 'bg-blue-600', desc: 'UG, PG & PhD' },
    { label: 'Faculty', icon: Users, path: '/faculty', color: 'bg-indigo-600', desc: '40+ Experts' },
    { label: 'Labs', icon: FlaskConical, path: '/curriculum-labs', color: 'bg-teal-600', desc: '10+ Labs' },
    { label: 'Placements', icon: Briefcase, path: '/placements', color: 'bg-emerald-600', desc: '95% Record' },
    { label: 'Research', icon: Star, path: '/research', color: 'bg-violet-600', desc: '100+ Papers' },
    { label: 'Events', icon: Calendar, path: '/events', color: 'bg-orange-600', desc: 'Workshops & More' },
    { label: 'Achievements', icon: Trophy, path: '/research', color: 'bg-amber-600', desc: 'Awards & Patents' },
    { label: 'Student Corner', icon: Zap, path: '/student-corner', color: 'bg-rose-600', desc: 'Clubs & Alumni' },
]

const badgeColors = {
    'Upcoming': 'bg-blue-100 text-blue-800 border-blue-200',
    'Apply Now': 'bg-green-100 text-green-800 border-green-200',
    'Important': 'bg-red-100 text-red-800 border-red-200',
    'Register': 'bg-violet-100 text-violet-800 border-violet-200',
}

const typeColors = {
    'Workshop': 'text-blue-700',
    'Internship': 'text-green-700',
    'Exam': 'text-red-700',
    'Hackathon': 'text-violet-700',
}

function MagneticCard({ children, className = '' }) {
    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        setPosition({ x: x * 0.1, y: y * 0.1 })
    }

    const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

    return (
        <motion.div
            ref={ref}
            className={`cursor-pointer ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
            {children}
        </motion.div>
    )
}

export default function Home() {
    const [announcementIdx, setAnnouncementIdx] = useState(0)
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
    const heroScale = useTransform(scrollY, [0, 400], [1, 0.95])

    const prevAnn = () => setAnnouncementIdx((i) => (i - 1 + announcements.length) % announcements.length)
    const nextAnn = () => setAnnouncementIdx((i) => (i + 1) % announcements.length)

    const visible = [0, 1, 2].map(offset =>
        announcements[(announcementIdx + offset) % announcements.length]
    )

    return (
        <div>
            {/* HERO */}
            <motion.section 
                className="relative min-h-screen flex items-center bg-white overflow-hidden"
                style={{ opacity: heroOpacity, scale: heroScale }}
            >
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-50 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div 
                                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded px-4 py-1.5 text-blue-700 text-sm font-medium mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                Excellence in CSE Education
                            </motion.div>
                            <motion.h1 
                                className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Welcome to <br />
                                <span className="text-blue-600">DeptVerse</span>
                            </motion.h1>
                            <motion.p 
                                className="text-gray-600 text-xl leading-relaxed mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Department of Computer Science & Engineering — Shaping future technologists through innovation, research, and academic excellence.
                            </motion.p>
                            <motion.div 
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link to="/programs" className="btn-primary flex items-center gap-2">
                                    Explore Programs <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link to="/login"
                                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-500 transition-all duration-300 flex items-center gap-2 hover:bg-gray-50">
                                    Portal Login <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 40 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:grid grid-cols-2 gap-4"
                        >
                            {[
                                { label: 'Placement Rate', value: '95%', sub: 'Batch 2024', bg: 'bg-blue-600' },
                                { label: 'Total Students', value: '1000+', sub: 'UG + PG + PhD', bg: 'bg-indigo-600' },
                                { label: 'Research Papers', value: '100+', sub: 'Published', bg: 'bg-teal-600' },
                                { label: 'Industry MoUs', value: '20+', sub: 'Partnerships', bg: 'bg-orange-600' },
                            ].map(({ label, value, sub, bg }, i) => (
                                <MagneticCard key={label}>
                                    <motion.div 
                                        className={`${bg} p-6 rounded shadow-lg hover:shadow-xl transition-all duration-300`}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <p className="text-3xl font-bold text-white mb-1">{value}</p>
                                        <p className="text-white font-medium">{label}</p>
                                        <p className="text-white/80 text-sm">{sub}</p>
                                    </motion.div>
                                </MagneticCard>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div 
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
                        <motion.div 
                            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* QUICK ACCESS */}
            <section className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Quick Access
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Everything you need, one click away
                    </motion.p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {quickLinks.map(({ label, icon: Icon, path, color, desc }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Link to={path}
                                    className="card p-6 flex flex-col items-center text-center hover-lift group block">
                                    <motion.div 
                                        className={`w-14 h-14 ${color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform rounded`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <p className="text-gray-900 font-semibold">{label}</p>
                                    <p className="text-gray-500 text-xs mt-1">{desc}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ABOUT PREVIEW */}
            <section className="section-pad bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                        >
                            <div className="inline-block bg-blue-50 border border-blue-200 rounded px-4 py-1.5 text-blue-700 text-sm font-medium mb-4">
                                About the Department
                            </div>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                                Shaping Tomorrow's Innovators
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Established in 2004, the Department of Computer Science & Engineering has been at the forefront of technical education, producing engineers who lead global technology companies. With world-class labs, experienced faculty, and an industry-connected curriculum, we prepare students for the challenges of tomorrow.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { label: 'Vision', text: 'To be a world-class center of excellence in CSE education.' },
                                    { label: 'Mission', text: 'Imparting quality education, fostering research and innovation.' },
                                ].map(({ label, text }) => (
                                    <motion.div 
                                        key={label} 
                                        className="card p-4"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="text-blue-600 font-semibold mb-2">{label}</p>
                                        <p className="text-gray-600 text-sm">{text}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                                Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            className="card p-8 border-l-4 border-l-blue-600"
                        >
                            <p className="text-gray-700 leading-relaxed italic mb-6 text-lg">
                                "Our department is committed to nurturing technically strong, ethically grounded, and research-oriented professionals who can make a meaningful impact on society."
                            </p>
                            <div className="flex items-center gap-4">
                                <motion.div 
                                    className="w-14 h-14 bg-blue-600 flex items-center justify-center text-white font-bold text-lg rounded"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    RK
                                </motion.div>
                                <div>
                                    <p className="text-gray-900 font-semibold">Dr. R. Krishnamurthy</p>
                                    <p className="text-gray-600 text-sm">Professor & Head, CSE Department</p>
                                    <p className="text-blue-600 text-sm">Ph.D, IIT Madras</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Department Highlights
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Numbers that speak for themselves
                    </motion.p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {stats.map(({ label, value, suffix }, i) => (
                            <motion.div 
                                key={label} 
                                initial={{ opacity: 0, scale: 0.8 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="stat-card"
                            >
                                <p className="text-4xl font-bold text-blue-600 mb-2">
                                    <Counter value={value} suffix={suffix} />
                                </p>
                                <p className="text-gray-700 font-medium">{label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANNOUNCEMENTS */}
            <section className="section-pad bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Latest Announcements</h2>
                            <p className="text-gray-500 mt-1">Stay up-to-date with department news</p>
                        </motion.div>
                        <motion.div 
                            className="flex gap-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <button 
                                onClick={prevAnn} 
                                className="w-10 h-10 card flex items-center justify-center hover:border-blue-400 transition-all hover-lift"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <button 
                                onClick={nextAnn} 
                                className="w-10 h-10 card flex items-center justify-center hover:border-blue-400 transition-all hover-lift"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visible.map((ann, i) => (
                            <motion.div 
                                key={ann.id} 
                                initial={{ opacity: 0, y: 30 }} 
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="card p-6 hover-lift"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-sm font-semibold ${typeColors[ann.type] || 'text-blue-700'}`}>
                                        {ann.type}
                                    </span>
                                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${badgeColors[ann.badge] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                                        {ann.badge}
                                    </span>
                                </div>
                                <h3 className="text-gray-900 font-semibold mb-2">{ann.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{ann.description}</p>
                                <p className="text-gray-400 text-xs">{ann.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RECRUITERS */}
            <section className="section-pad bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Recruiters
                    </motion.h2>
                    <motion.p 
                        className="section-subtitle mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Top companies hiring our graduates
                    </motion.p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                        {recruiters.map((name, i) => (
                            <motion.div 
                                key={name} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className="card p-4 flex items-center justify-center"
                            >
                                <span className="text-gray-700 font-semibold text-sm text-center">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-pad bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="card p-12 border-t-4 border-t-blue-600"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                            Join the Future of Computing
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Be part of a department that's shaping the next generation of technologists. Explore programs, connect with faculty, and launch your career.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/programs" className="btn-primary flex items-center gap-2">
                                Explore Programs <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/login"
                                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded font-semibold hover:border-gray-500 transition-all duration-300">
                                Access ERP Portal
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
