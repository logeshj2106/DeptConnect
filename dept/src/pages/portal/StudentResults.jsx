import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Award } from 'lucide-react'

const marks = [
    { subject: 'Data Structures', ia1: 48, ia2: 45, total: 93, rank: 3 },
    { subject: 'Operating Systems', ia1: 42, ia2: 40, total: 82, rank: 8 },
    { subject: 'Computer Networks', ia1: 50, ia2: 48, total: 98, rank: 1 },
    { subject: 'DBMS', ia1: 44, ia2: 42, total: 86, rank: 5 },
    { subject: 'AI', ia1: 47, ia2: 46, total: 93, rank: 2 },
]

export default function StudentResults() {
    const totalMarks = marks.reduce((sum, m) => sum + m.total, 0)
    const average = Math.round(totalMarks / marks.length)

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-600">
                <h1 className="text-2xl font-bold text-gray-900">Results</h1>
                <p className="text-gray-500 text-sm mt-1">Internal Assessment Performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-500 text-sm">Average Score</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{average}/100</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-teal-600" />
                        <span className="text-gray-500 text-sm">Total Marks</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{totalMarks}/500</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-indigo-600" />
                        <span className="text-gray-500 text-sm">Class Rank</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">#4</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-gray-900 font-semibold text-lg">Internal Assessment Marks</h2>
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
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Rank</th>
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
                                    <td className="px-4 py-3 text-center text-gray-600">#{m.rank}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}
