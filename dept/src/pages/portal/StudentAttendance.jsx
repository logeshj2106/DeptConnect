import React from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { attendanceData } from '../../data/data'

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

export default function StudentAttendance() {
    const overall = Math.round(attendanceData.reduce((a, b) => a + b.percentage, 0) / attendanceData.length)

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-600">
                <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
                <p className="text-gray-500 text-sm mt-1">Track your class attendance</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Overall Attendance: {overall}%</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${overall >= 75 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {overall >= 75 ? 'Eligible for Exam' : 'Not Eligible'}
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    {attendanceData.map((item) => <AttendanceCard key={item.subject} {...item} />)}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <h3 className="text-gray-900 font-semibold text-lg mb-4">Attendance Chart</h3>
                <ResponsiveContainer width="100%" height={250}>
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
    )
}
