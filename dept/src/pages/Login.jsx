import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Eye, EyeOff, ArrowRight } from 'lucide-react'

const roles = [
    { id: 'student', label: 'Student', icon: '🎓', path: '/portal/student', color: 'bg-blue-600', desc: 'Access attendance, timetable & results' },
    { id: 'faculty', label: 'Faculty', icon: '👨‍🏫', path: '/portal/faculty', color: 'bg-teal-600', desc: 'Manage classes & mark attendance' },
    { id: 'admin', label: 'Admin', icon: '🛡️', path: '/portal/admin', color: 'bg-indigo-600', desc: 'Department-wide administration' },
]

export default function Login() {
    const [role, setRole] = useState('student')
    const [showPass, setShowPass] = useState(false)
    const [form, setForm] = useState({ id: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const selectedRole = roles.find(r => r.id === role)

    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            navigate(selectedRole.path)
        }, 1000)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-50 rounded-full blur-[100px]" />

            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10">

                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div 
                        className="w-16 h-16 bg-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <GraduationCap className="w-8 h-8 text-white" />
                    </motion.div>
                    <h1 className="text-2xl font-bold text-gray-900">Dept<span className="text-blue-600">Verse</span> Portal</h1>
                    <p className="text-gray-500 text-sm mt-1">CSE Department ERP System</p>
                </motion.div>

                <motion.div 
                    className="bg-white p-8 rounded shadow-lg border border-gray-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-gray-600 text-sm font-medium mb-3">Select your role</p>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {roles.map((r) => (
                            <motion.button 
                                key={r.id} 
                                onClick={() => setRole(r.id)}
                                className={`p-3 rounded border text-center transition-all duration-200 ${role === r.id
                                        ? `${r.color} text-white shadow`
                                        : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <div className="text-2xl mb-1">{r.icon}</div>
                                <p className={`text-xs font-semibold ${role === r.id ? 'text-white' : 'text-gray-600'}`}>{r.label}</p>
                            </motion.button>
                        ))}
                    </div>
                    <motion.p 
                        className="text-gray-500 text-xs mb-6 text-center"
                        key={selectedRole.desc}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {selectedRole.desc}
                    </motion.p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-gray-600 text-sm mb-2 block">
                                {role === 'student' ? 'Register Number' : role === 'faculty' ? 'Employee ID' : 'Admin ID'}
                            </label>
                            <motion.input
                                type="text"
                                value={form.id}
                                onChange={(e) => setForm({ ...form, id: e.target.value })}
                                placeholder={role === 'student' ? 'e.g. 2021CS001' : role === 'faculty' ? 'e.g. FAC001' : 'e.g. ADMIN01'}
                                className="input-field"
                                required
                                whileFocus={{ scale: 1.01 }}
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 text-sm mb-2 block">Password</label>
                            <div className="relative">
                                <motion.input
                                    type={showPass ? 'text' : 'password'}
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    placeholder="Enter password"
                                    className="input-field pr-12"
                                    required
                                    whileFocus={{ scale: 1.01 }}
                                />
                                <motion.button 
                                    type="button" 
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </motion.button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300" /> Remember me
                            </label>
                            <motion.button 
                                type="button" 
                                className="text-blue-600 hover:underline"
                                whileHover={{ scale: 1.05 }}
                            >
                                Forgot password?
                            </motion.button>
                        </div>
                        <motion.button 
                            type="submit"
                            className={`w-full py-3 rounded font-semibold text-white ${selectedRole.color} hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2`}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <motion.div 
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                            ) : (
                                <>
                                    Login to {selectedRole.label} Portal <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    <p className="text-center text-gray-400 text-xs mt-6">
                        Having trouble? Contact{' '}
                        <a href="mailto:cse@department.edu.in" className="text-blue-600 hover:underline">cse@department.edu.in</a>
                    </p>
                </motion.div>

                <motion.p 
                    className="text-center text-gray-500 text-sm mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <a href="/" className="hover:text-blue-600 transition-colors">← Back to Department Website</a>
                </motion.p>
            </motion.div>
        </div>
    )
}
