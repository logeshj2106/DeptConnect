import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { label: 'Home', path: '/' },
    {
        label: 'About', path: '/about',
        dropdown: [
            { label: 'Vision & Mission', path: '/about#vision' },
            { label: "HoD's Message", path: '/about#hod' },
            { label: 'Department History', path: '/about#history' },
        ]
    },
    { label: 'Programs', path: '/programs' },
    { label: 'Faculty', path: '/faculty' },
    {
        label: 'Academics', path: '#',
        dropdown: [
            { label: 'Curriculum & Labs', path: '/curriculum-labs' },
            { label: 'Research', path: '/research' },
            { label: 'eLearning', path: '/elearning' },
        ]
    },
    { label: 'Placements', path: '/placements' },
    { label: 'Events', path: '/events' },
    { label: 'Student Corner', path: '/student-corner' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        setOpenDropdown(null)
    }, [location])

    return (
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div 
                            className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GraduationCap className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                            <span className="text-gray-900 font-bold text-lg leading-none tracking-tight">Dept<span className="text-blue-600">Verse</span></span>
                            <p className="text-gray-500 text-xs leading-none">CSE Department</p>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <motion.button
                                    onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                    onClick={() => !item.dropdown && navigate(item.path)}
                                    className={`nav-link flex items-center gap-1 px-3 py-2 ${location.pathname === item.path ? 'text-blue-600' : ''}`}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                                </motion.button>
                                <AnimatePresence>
                                    {item.dropdown && openDropdown === item.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            transition={{ duration: 0.15 }}
                                            onMouseEnter={() => setOpenDropdown(item.label)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                            className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg py-1"
                                        >
                                            {item.dropdown.map((sub) => (
                                                <motion.div
                                                    key={sub.label}
                                                    whileHover={{ x: 3, backgroundColor: '#f5f5f5' }}
                                                >
                                                    <Link to={sub.path}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                                                        {sub.label}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <Link to="/login"
                            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors px-3 py-2">
                            Sign In
                        </Link>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/login"
                                className="btn-primary text-sm px-5 py-2">
                                Portal Login
                            </Link>
                        </motion.div>
                    </div>

                    <motion.button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded text-gray-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="lg:hidden bg-white border-t border-gray-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    <Link to={item.dropdown ? '#' : item.path}
                                        className={`block px-4 py-3 text-gray-800 font-medium ${location.pathname === item.path ? 'text-blue-600' : ''}`}>
                                        {item.label}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="ml-4 mt-1 space-y-1">
                                            {item.dropdown.map((sub) => (
                                                <Link key={sub.label} to={sub.path}
                                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600">
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t border-gray-200 flex gap-3">
                                <Link to="/login" className="flex-1 btn-primary text-center text-sm">Portal Login</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
