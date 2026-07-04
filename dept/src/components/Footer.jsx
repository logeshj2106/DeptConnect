import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
    'Quick Links': [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Programs', path: '/programs' },
        { label: 'Faculty', path: '/faculty' },
        { label: 'Research', path: '/research' },
    ],
    'Programs': [
        { label: 'B.E. CSE', path: '/programs' },
        { label: 'M.E. CSE', path: '/programs' },
        { label: 'Ph.D', path: '/programs' },
        { label: 'Curriculum', path: '/curriculum-labs' },
        { label: 'Regulations', path: '/curriculum-labs' },
    ],
    'Student': [
        { label: 'Placements', path: '/placements' },
        { label: 'Events', path: '/events' },
        { label: 'Student Corner', path: '/student-corner' },
        { label: 'eLearning', path: '/elearning' },
        { label: 'Portal Login', path: '/login' },
    ],
}

const socials = [
    { Icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { Icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { Icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
    { Icon: Youtube, href: '#', color: 'hover:text-red-400' },
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group">
                            <motion.div 
                                className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GraduationCap className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                                <span className="text-white font-bold text-xl">Dept<span className="text-blue-400">Verse</span></span>
                                <p className="text-gray-400 text-xs">CSE Department</p>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Department of Computer Science & Engineering — shaping future technologists through innovation, research, and excellence.
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <motion.div className="flex items-center gap-2 hover:text-blue-400 transition-colors" whileHover={{ x: 3 }}>
                                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span>CSE Block, Engineering College, Tamil Nadu</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2 hover:text-blue-400 transition-colors" whileHover={{ x: 3 }}>
                                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span>cse@department.edu.in</span>
                            </motion.div>
                            <motion.div className="flex items-center gap-2 hover:text-blue-400 transition-colors" whileHover={{ x: 3 }}>
                                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </motion.div>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white font-semibold mb-4">{title}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <motion.div
                                            whileHover={{ x: 3 }}
                                        >
                                            <Link to={link.path}
                                                className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 DeptVerse – CSE Department. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {socials.map(({ Icon, href }, i) => (
                            <motion.a 
                                key={href + i} 
                                href={href}
                                className="text-gray-500 hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
