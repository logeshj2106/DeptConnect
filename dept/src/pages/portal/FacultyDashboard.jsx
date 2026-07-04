import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Users, BarChart3 } from 'lucide-react'

const classes = [
    { id: 1, name: 'Data Structures', section: 'A', time: '9:00 - 10:00', room: 'A101', students: 62 },
    { id: 2, name: 'Operating Systems', section: 'B', time: '11:00 - 12:00', room: 'A102', students: 58 },
    { id: 3, name: 'DBMS Lab', section: 'A', time: '2:00 - 4:00', room: 'Lab 3', students: 30 },
]

const students = [
    { rollNo: '2021CS001', name: 'Arun Kumar', photo: 'AK' },
    { rollNo: '2021CS002', name: 'Priya Rajan', photo: 'PR' },
    { rollNo: '2021CS003', name: 'Karthik M', photo: 'KM' },
    { rollNo: '2021CS004', name: 'Divya S', photo: 'DS' },
    { rollNo: '2021CS005', name: 'Manoj P', photo: 'MP' },
    { rollNo: '2021CS006', name: 'Sneha R', photo: 'SR' },
    { rollNo: '2021CS007', name: 'Vijay K', photo: 'VK' },
    { rollNo: '2021CS008', name: 'Ananya T', photo: 'AT' },
]

export default function FacultyDashboard() {
    const [selectedClass, setSelectedClass] = useState(null)
    const [attendance, setAttendance] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const toggleAttendance = (roll) => {
        setAttendance(prev => ({
            ...prev,
            [roll]: prev[roll] === 'present' ? 'absent' : prev[roll] === 'absent' ? undefined : 'present'
        }))
    }

    const handleSubmit = () => {
        setSubmitted(true)
        setTimeout(() => { setSubmitted(false); setSelectedClass(null); setAttendance({}) }, 2500)
    }

    const presentCount = Object.values(attendance).filter(v => v === 'present').length

    return (
        <div className="space-y-6">
            {/* Welcome */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-l-blue-600">
                <h1 className="text-2xl font-bold text-gray-900">Welcome, <span className="text-blue-600">Dr. Meenakshi</span> 👋</h1>
                <p className="text-gray-500 text-sm mt-1">FAC002 | Associate Professor | CSE Department</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Today's Classes", value: '3', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
                    { label: 'Total Students', value: '150', icon: Users, color: 'text-teal-600', bg: 'bg-teal-100' },
                    { label: 'Attendance Marked', value: '2/3', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
                    { label: 'Avg. Attendance', value: '85%', icon: BarChart3, color: 'text-indigo-600', bg: 'bg-indigo-100' },
                ].map(({ label, value, icon: Icon, color, bg }) => (
                    <div key={label} className="bg-white rounded-lg shadow p-5 flex items-center gap-3 border border-gray-100">
                        <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${color}`} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{value}</p>
                            <p className="text-gray-500 text-xs">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Classes */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100">
                    <h3 className="text-gray-900 font-semibold text-lg">Today's Classes</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {classes.map((cls) => (
                        <div key={cls.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex-1">
                                <p className="text-gray-900 font-medium">{cls.name}</p>
                                <p className="text-gray-500 text-xs mt-0.5">Section {cls.section} • {cls.time} • {cls.room} • {cls.students} Students</p>
                            </div>
                            <button onClick={() => { setSelectedClass(cls); setAttendance({}) }}
                                className="bg-blue-600 text-white text-xs px-4 py-2 rounded hover:bg-blue-700 transition-all font-medium">
                                Mark Attendance
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Attendance Panel */}
            {selectedClass && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <h3 className="text-gray-900 font-semibold text-lg">{selectedClass.name} — Attendance</h3>
                            <p className="text-gray-500 text-xs mt-0.5">{selectedClass.time} | Section {selectedClass.section}</p>
                        </div>
                        <div className="text-right bg-blue-50 px-4 py-2 rounded">
                            <p className="text-gray-900 font-bold text-lg">{presentCount}/{students.length}</p>
                            <p className="text-gray-500 text-xs">Present</p>
                        </div>
                    </div>

                    <div className="p-4">
                        {/* Mark All */}
                        <div className="flex gap-2 mb-4">
                            <button onClick={() => setAttendance(Object.fromEntries(students.map(s => [s.rollNo, 'present'])))}
                                className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-3 py-1.5 rounded-lg hover:bg-teal-100 transition-colors">
                                Mark All Present
                            </button>
                            <button onClick={() => setAttendance(Object.fromEntries(students.map(s => [s.rollNo, 'absent'])))}
                                className="text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">
                                Mark All Absent
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {students.map((s) => {
                                const status = attendance[s.rollNo]
                                return (
                                    <button key={s.rollNo} onClick={() => toggleAttendance(s.rollNo)}
                                        className={`bg-white p-3 text-center rounded-lg border-2 transition-all hover:-translate-y-0.5 hover:shadow-md ${status === 'present' ? 'border-teal-500 bg-teal-50'
                                                : status === 'absent' ? 'border-red-500 bg-red-50'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}>
                                        <div className={`w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm ${status === 'present' ? 'bg-teal-500' : status === 'absent' ? 'bg-red-500' : 'bg-gray-400'
                                            }`}>
                                            {s.photo}
                                        </div>
                                        <p className="text-gray-900 text-xs font-medium">{s.name.split(' ')[0]}</p>
                                        <p className="text-gray-400 text-xs">{s.rollNo}</p>
                                        {status && (
                                            <span className={`text-xs mt-1 inline-block font-medium ${status === 'present' ? 'text-teal-600' : 'text-red-600'}`}>
                                                {status === 'present' ? '✓ Present' : '✗ Absent'}
                                            </span>
                                        )}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="mt-4 flex gap-3">
                            <button onClick={handleSubmit} disabled={submitted}
                                className="btn-primary flex items-center gap-2 disabled:opacity-50">
                                {submitted ? '✓ Submitted!' : 'Submit Attendance'}
                            </button>
                            <button onClick={() => setSelectedClass(null)} className="bg-white border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded text-sm">
                                Cancel
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
