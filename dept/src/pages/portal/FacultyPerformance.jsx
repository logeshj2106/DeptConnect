import React from 'react'
import { motion } from 'framer-motion'
import { Users, BookOpen, TrendingUp } from 'lucide-react'

const myClasses = [
    { name: 'Data Structures', section: 'A', students: 62, hours: 4, completed: 28, total: 45 },
    { name: 'Operating Systems', section: 'B', students: 58, hours: 3, completed: 20, total: 40 },
    { name: 'DBMS Lab', section: 'A', students: 30, hours: 2, completed: 12, total: 15 },
]

const performance = [
    { month: 'Jan', avgAttendance: 92 },
    { month: 'Feb', avgAttendance: 88 },
    { month: 'Mar', avgAttendance: 95 },
    { month: 'Apr', avgAttendance: 90 },
    { month: 'May', avgAttendance: 94 },
    { month: 'Jun', avgAttendance: 91 },
]

export default function FacultyPerformance() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-teal-600">
                <h1 className="text-2xl font-bold text-gray-900">My Performance</h1>
                <p className="text-gray-500 text-sm mt-1">Track your teaching metrics and student performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <Users className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-500 text-sm">Total Students</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">150</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-500 text-sm">Classes Taken</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">60</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        <span className="text-gray-500 text-sm">Avg Attendance</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">92%</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-gray-900 font-semibold text-lg">My Classes</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <th className="text-left px-4 py-3 text-gray-600 font-medium">Subject</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Section</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Students</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Hours/Week</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Classes Completed</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Progress</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {myClasses.map((cls) => (
                                <tr key={cls.name} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 text-gray-900 font-medium">{cls.name}</td>
                                    <td className="px-4 py-3 text-center text-gray-600">{cls.section}</td>
                                    <td className="px-4 py-3 text-center text-gray-600">{cls.students}</td>
                                    <td className="px-4 py-3 text-center text-gray-600">{cls.hours}h</td>
                                    <td className="px-4 py-3 text-center text-gray-600">{cls.completed}/{cls.total}</td>
                                    <td className="px-4 py-3 text-center">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${(cls.completed / cls.total) * 100}%` }}></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <h2 className="text-gray-900 font-semibold text-lg mb-4">Monthly Attendance Trend</h2>
                <div className="flex items-end justify-between h-40 gap-2">
                    {performance.map((p, i) => (
                        <div key={p.month} className="flex-1 flex flex-col items-center">
                            <div className="w-full bg-teal-100 rounded-t" style={{ height: `${p.avgAttendance}%` }}>
                                <div className="w-full bg-teal-500 rounded-t h-full"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">{p.month}</p>
                            <p className="text-xs font-medium text-gray-700">{p.avgAttendance}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
