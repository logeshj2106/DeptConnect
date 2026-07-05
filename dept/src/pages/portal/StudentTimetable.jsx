import React from 'react'
import { motion } from 'framer-motion'
import { timetable } from '../../data/data'

export default function StudentTimetable() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-600">
                <h1 className="text-2xl font-bold text-gray-900">Timetable</h1>
                <p className="text-gray-500 text-sm mt-1">{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                    <h2 className="text-gray-900 font-semibold text-lg">Today's Schedule</h2>
                </div>
                <div className="divide-y divide-gray-100">
                    {timetable.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                            <div className="w-28 text-sm text-blue-600 font-mono flex-shrink-0 font-medium bg-blue-50 px-3 py-2 rounded">
                                {item.time}
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-900 font-medium">{item.subject}</p>
                                <p className="text-gray-500 text-sm">{item.faculty}</p>
                            </div>
                            <span className="text-sm bg-gray-100 px-3 py-1 text-gray-600 rounded">{item.room}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <h2 className="text-gray-900 font-semibold text-lg mb-4">Week Overview</h2>
                <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <div key={day} className={`text-center p-3 rounded-lg ${i < 5 ? 'bg-gray-50' : 'bg-gray-100 text-gray-400'}`}>
                            <p className="text-sm font-medium text-gray-600">{day}</p>
                            <p className="text-xs text-gray-400 mt-1">{i < 5 ? '4 Classes' : 'Holiday'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
