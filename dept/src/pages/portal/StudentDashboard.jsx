import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { BookOpen, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { attendanceData, timetable } from '../../data/data'

const marks = [
    { subject: 'Data Structures', ia1: 48, ia2: 45, total: 93 },
    { subject: 'Operating Systems', ia1: 42, ia2: 40, total: 82 },
    { subject: 'Computer Networks', ia1: 50, ia2: 48, total: 98 },
    { subject: 'DBMS', ia1: 44, ia2: 42, total: 86 },
    { subject: 'AI', ia1: 47, ia2: 46, total: 93 },
]

function AttendanceCard({ subject, attended, total, percentage }) {
    const color = percentage >= 90 ? '#14b8a6' : percentage >= 75 ? '#0ea5e9' : '#ef4444'
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center border border-gray-100 hover:shadow-md transition-all">
            <div className="relative w-20 h-20 mx-auto mb-3">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke={color} strokeWidth="3"
                        strokeDasharray={`${percentage} ${100 - percentage}`} strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">{percentage}%</span>
                </div>
            </div>
            <p className="text-gray-900 font-semibold text-sm">{subject}</p>
            <p className="text-gray-500 text-xs mt-1">{attended}/{total} classes</p>
            {percentage < 75 && (
                <span className="inline-block mt-2 text-xs text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                    Low Attendance
                </span>
            )}
        </div>
    )
}

export default function StudentDashboard() {
    const [activeTab, setActiveTab] = useState('attendance')
    const overall = Math.round(attendanceData.reduce((a, b) => a + b.percentage, 0) / attendanceData.length)

    const tabs = ['attendance', 'timetable', 'results', 'fee']

    return (
        <div className="space-y-6">
            {/* Welcome */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-600">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back, <span className="text-blue-600">Arun Kumar</span> 👋</h1>
                        <p className="text-gray-500 text-sm mt-1">2021CS001 | III Year B.E. CSE | Section A</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-center bg-blue-50 px-6 py-3 rounded-lg">
                            <p className="text-3xl font-bold text-blue-600">{overall}%</p>
                            <p className="text-gray-500 text-xs">Overall Attendance</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Attendance', value: `${overall}%`, icon: CheckCircle2, color: 'text-teal-600', bg: 'bg-teal-100' },
                    { label: 'Pending Leaves', value: '2', icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
                    { label: 'Assignments Due', value: '3', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-100' },
                    { label: 'Exam in Days', value: '12', icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-100' },
                ].map(({ label, value, icon: Icon, color, bg }) => (
                    <motion.div key={label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-lg shadow p-5 flex items-center gap-3 border border-gray-100 hover:shadow-md transition-all">
                        <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${color}`} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{value}</p>
                            <p className="text-gray-500 text-xs">{label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
                {tabs.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded text-sm font-medium capitalize transition-all ${activeTab === tab
                            ? 'bg-blue-600 text-white shadow'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                            }`}>
                        {tab === 'attendance' ? '📊 Attendance' : tab === 'timetable' ? '📅 Timetable' : tab === 'results' ? '📋 Results' : '💳 Fee Status'}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'attendance' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {attendanceData.map((item) => <AttendanceCard key={item.subject} {...item} />)}
                    </div>
                    <div className="mt-6 bg-white rounded-lg shadow p-6 border border-gray-100">
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">Attendance Chart</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={attendanceData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="subject" stroke="#6b7280" tick={{ fill: '#374151', fontSize: 12 }} />
                                <YAxis stroke="#6b7280" tick={{ fill: '#374151', fontSize: 12 }} domain={[0, 100]} />
                                <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', color: '#111827' }} />
                                <Bar dataKey="percentage" fill="#2563eb" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            )}

            {activeTab === 'timetable' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
                    <div className="p-4 border-b border-gray-100">
                        <h3 className="text-gray-900 font-semibold text-lg">Today's Schedule</h3>
                        <p className="text-gray-500 text-xs mt-1">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {timetable.map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                                <div className="w-28 text-xs text-blue-600 font-mono flex-shrink-0 font-medium">{item.time}</div>
                                <div className="flex-1">
                                    <p className="text-gray-900 font-medium">{item.subject}</p>
                                    <p className="text-gray-500 text-xs">{item.faculty}</p>
                                </div>
                                <span className="text-xs bg-gray-100 px-3 py-1 text-gray-600 rounded">{item.room}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {activeTab === 'results' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
                    <div className="p-4 border-b border-gray-100">
                        <h3 className="text-gray-900 font-semibold text-lg">Internal Assessment Marks</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="text-left px-4 py-3 text-gray-600 font-medium">Subject</th>
                                    <th className="text-center px-4 py-3 text-gray-600 font-medium">IA-1 (50)</th>
                                    <th className="text-center px-4 py-3 text-gray-600 font-medium">IA-2 (50)</th>
                                    <th className="text-center px-4 py-3 text-gray-600 font-medium">Total (100)</th>
                                    <th className="text-center px-4 py-3 text-gray-600 font-medium">Grade</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {marks.map((m) => (
                                    <tr key={m.subject} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 text-gray-900 font-medium">{m.subject}</td>
                                        <td className="px-4 py-3 text-center text-gray-600">{m.ia1}</td>
                                        <td className="px-4 py-3 text-center text-gray-600">{m.ia2}</td>
                                        <td className="px-4 py-3 text-center font-bold text-gray-900">{m.total}</td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${m.total >= 90 ? 'bg-teal-100 text-teal-700' : m.total >= 80 ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                {m.total >= 90 ? 'O' : m.total >= 80 ? 'A+' : 'A'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {activeTab === 'fee' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="bg-white rounded-lg shadow p-6 border border-teal-200 border-l-4 border-l-teal-500">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 className="w-6 h-6 text-teal-600" />
                            <h3 className="text-gray-900 font-semibold text-lg">Fee Status - Academic Year 2024-25</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { term: 'Semester Fee', amount: '₹45,000', status: 'Paid', date: 'July 10, 2024' },
                                { term: 'Hostel Fee', amount: '₹20,000', status: 'Paid', date: 'July 12, 2024' },
                                { term: 'Bus Fee', amount: '₹8,000', status: 'Pending', date: 'Due: Aug 1, 2024' },
                            ].map(({ term, amount, status, date }) => (
                                <div key={term} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <p className="text-gray-500 text-xs mb-1">{term}</p>
                                    <p className="text-gray-900 font-bold text-lg">{amount}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${status === 'Paid' ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-700'}`}>
                                            {status}
                                        </span>
                                        <span className="text-gray-400 text-xs">{date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
