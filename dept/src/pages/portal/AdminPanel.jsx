import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { motion } from 'framer-motion'
import { Users, GraduationCap, BarChart3, TrendingUp, Download, Search, Filter } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts'
import {faculty } from '../../data/data'
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"

const studentData = [
    { rollNo: '2021CS001', name: 'Arun Kumar', year: 'III', section: 'A', attendance: '93%', cgpa: '8.9' },
    { rollNo: '2021CS002', name: 'Priya Rajan', year: 'III', section: 'A', attendance: '87%', cgpa: '9.2' },
    { rollNo: '2021CS003', name: 'Karthik M', year: 'III', section: 'B', attendance: '79%', cgpa: '8.1' },
    { rollNo: '2021CS004', name: 'Divya S', year: 'III', section: 'B', attendance: '91%', cgpa: '9.5' },
    { rollNo: '2021CS005', name: 'Manoj P', year: 'IV', section: 'A', attendance: '68%', cgpa: '7.8' },
]

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState('overview')
    const [search, setSearch] = useState('')

    // 🔹 Add below search state
    const [selectedStudent, setSelectedStudent] = useState(null)
    const location = useLocation()

    const [dashboardData, setDashboardData] = useState(null)
    const [dashboardLoading, setDashboardLoading] = useState(true)

    useEffect(() => {
    if (location.hash === '#students') {
        setActiveTab('students')
    } else if (location.hash === '#faculty') {
        setActiveTab('faculty')
    } else if (location.hash === '#reports') {
        setActiveTab('reports')
    } else {
        setActiveTab('overview')
    }
    }, [location])
    
    useEffect(() => {
    const loadDashboard = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/dashboard")

      if (!response.ok) throw new Error("Backend not ready")

      const data = await response.json()
      setDashboardData(data)

    } catch (error) {

      console.log("Using fallback dashboard data")

      // Fallback if backend not running
      setDashboardData({
        stats: {
          totalStudents: 1028,
          totalFaculty: 42,
          avgAttendance: 86,
          placementRate: 95,
        },
        placementTrend: [
          { year: "2022", percentage: 88 },
          { year: "2023", percentage: 91 },
          { year: "2024", percentage: 95 },
        ],
        alerts: [
          { type: "critical", message: "18 students below 75%" },
          { type: "warning", message: "3 leave requests pending" },
          { type: "info", message: "NBA renewal in 60 days" }
         ]
       })
       } finally {
      setDashboardLoading(false)
        }
      }

  loadDashboard()
}, [])

// 🔹 View function
    const handleView = (student) => {
      setSelectedStudent(student)
}

// 🔹 Delete function
    const handleDelete = (rollNo) => {
       alert("Deleted student: " + rollNo)
}
    // 🔹 Export PDF function
const handleExportPDF = () => {
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text("Student List - CSE Department", 14, 15)

    const tableColumn = [
        "Roll No",
        "Name",
        "Year",
        "Section",
        "Attendance",
        "CGPA"
    ]

    const tableRows = []

    filteredStudents.forEach(student => {
        tableRows.push([
            student.rollNo,
            student.name,
            student.year,
            student.section,
            student.attendance,
            student.cgpa
        ])
    })

    autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 25
    })

    doc.save("students_list.pdf")
}

    

    const filteredStudents = studentData.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) || s.rollNo.includes(search)
    )

    const tabs = ['overview', 'students', 'faculty', 'reports']

    if (dashboardLoading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
    </div>
     )
  }
    const downloadExcel = async (type) => {
          console.log("Downloading:", type)
  try {
    const response = await fetch(
      `http://localhost:5000/api/admin/reports/${type}`
    )

    if (!response.ok) throw new Error("Failed to fetch report")

    const data = await response.json()

    if (!data || data.length === 0) {
      alert("No data available")
      return
    }

    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report")

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    })

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    })

    saveAs(blob, `${type}_report.xlsx`)

  } catch (error) {
    console.error(error)
    alert("Download failed")
    }
 }

    return (
        <div className="space-y-6">
            {/* Welcome */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-slate-200 shadow-md rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard <span className="text-accent-violet">🛡️</span></h1>
                <p className="text-slate-500 text-sm mt-1">Full departmental overview and management</p>
            </motion.div>

            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Students', value: dashboardData?.stats?.totalStudents, icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { label: 'Faculty Members', value: dashboardData?.stats?.totalFaculty, icon: GraduationCap, color: 'text-violet-400', bg: 'bg-violet-500/10' },
                    { label: 'Avg Attendance', value: dashboardData?.stats?.avgAttendance + "%", icon: BarChart3, color: 'text-teal-400', bg: 'bg-teal-500/10' },
                    { label: 'Placement Rate', value: dashboardData?.stats?.placementRate + "%", icon: TrendingUp, color: 'text-orange-400', bg: 'bg-orange-500/10' },
                    ].map(({ label, value, icon: Icon, color, bg }) => (
                    <div key={label} className="glass-card p-5 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${color}`} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">{value}</p>
                            <p className="text-slate-500 text-xs">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
                {tabs.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${activeTab === tab
                                ? 'bg-gradient-to-r from-accent-violet to-accent-blue text-white'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}>
                        {tab === 'overview' ? '📊 Overview' : tab === 'students' ? '🎓 Students' : tab === 'faculty' ? '👨‍🏫 Faculty' : '📈 Reports'}
                    </button>
                ))}
            </div>

            {/* Overview */}
            {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glass-card p-6">
                            <h3 className="text-white font-semibold font-heading mb-4">Placement Trend</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={dashboardData?.placementTrend}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="year" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#f8fafc' }} />
                                    <Line type="monotone" dataKey="percentage" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: '#0ea5e9' }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="glass-card p-6">
                            <h3 className="text-white font-semibold font-heading mb-4">Avg Package (LPA)</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={dashboardData?.placementTrend}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="year" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#f8fafc' }} />
                                    <Bar dataKey="avgPackage" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* Alerts */}
                   <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-6">
  <h3 className="text-lg font-bold text-slate-900 mb-4">
    ⚠️ Attention Required
  </h3>

  <div className="space-y-4">
    {dashboardData?.alerts?.length === 0 && (
      <p className="text-slate-500 text-sm">
        No alerts at the moment.
      </p>
    )}

    {dashboardData?.alerts?.map((alert, index) => (
      <div
        key={index}
        className={`flex items-center justify-between p-4 rounded-xl shadow-sm transition ${
          alert.type === "critical"
            ? "bg-red-50 border-l-4 border-red-500 text-red-600"
            : alert.type === "warning"
            ? "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-600"
            : "bg-orange-50 border-l-4 border-orange-500 text-orange-600"
        }`}
      >
        <div>
          <p className="font-semibold">{alert.message}</p>
          {alert.description && (
            <p className="text-xs opacity-70">{alert.description}</p>
          )}
        </div>

        <span
          className={`text-xs px-3 py-1 rounded-full text-white ${
            alert.type === "critical"
              ? "bg-red-500"
              : alert.type === "warning"
              ? "bg-yellow-500"
              : "bg-orange-500"
          }`}
        >
          {alert.type.toUpperCase()}
        </span>
      </div>
    ))}
        </div>
      </div>
                </motion.div>
            )}

            {/* Students */}
            {activeTab === 'students' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex items-center justify-between gap-4 flex-wrap">
                        <h3 className="text-slate-900 text-lg font-bold mb-4">Student Management</h3>
                        <div className="flex gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input value={search} onChange={e => setSearch(e.target.value)}
                                    placeholder="Search students..."
                                    className="bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48" />
                            </div>
                            <button 
                              onClick={handleExportPDF}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1 text-sm shadow-sm"
                            >
                            <Download className="w-4 h-4" /> Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    {['Roll No', 'Name', 'Year', 'Section', 'Attendance', 'CGPA', 'Action'].map(h => (
                                        <th key={h} className="text-left px-4 py-3 text-slate-600 font-semibold">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredStudents.map((s) => (
                                    <tr key={s.rollNo} className="hover:bg-white/2 transition-colors">
                                        <td className="px-4 py-3 text-slate-700 font-mono text-xs">{s.rollNo}</td>
                                        <td className="px-4 py-3 text-slate-900 font-medium">{s.name}</td>
                                        <td className="px-4 py-3 text-slate-700">{s.year}</td>
                                        <td className="px-4 py-3 text-slate-700">{s.section}</td>
                                        <td className="px-4 py-3">
                                            <span className={`font-medium ${parseInt(s.attendance) >= 85 ? 'text-teal-400' : parseInt(s.attendance) >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>
                                                {s.attendance}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-slate-900 font-semibold">{s.cgpa}</td>
                                       <td className="px-4 py-3 flex gap-2">
                                           <button onClick={() => handleView(s)} className="text-xs text-accent-blue hover:underline">View</button>

                                        <button onClick={() => handleDelete(s.rollNo)} className="text-xs text-red-400 hover:underline">Delete</button>
                                       </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {/* Faculty */}
            {activeTab === 'faculty' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden"s>
                    <div className="p-4 border-b border-slate-200 bg-slate-50">
                        <h3 className="text-slate-900 font-semibold">Faculty Management</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    {['Name', 'Designation', 'Specialization', 'Experience', 'Publications'].map(h => (
                                        <th key={h} className="text-left px-4 py-3 text-slate-600 font-semibold">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {faculty.map((f) => (
                                    <tr key={f.id} className="hover:bg-white/2 transition-colors">
                                        <td className="px-4 py-3 text-slate-900 font-medium">{f.name}</td>
                                        <td className="px-4 py-3 text-blue-600 text-xs font-medium">{f.designation}</td>
                                        <td className="px-4 py-3 text-slate-700 text-xs">{f.specialization}</td>
                                        <td className="px-4 py-3 text-slate-700">{f.experience}</td>
                                        <td className="px-4 py-3 text-slate-900 font-semibold">{f.publications}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {/* Reports */}
            {activeTab === 'reports' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-4">
                    {[
  { name: 'Attendance Report (Month)', type: 'attendance', desc: 'Complete monthly attendance analysis', color: 'from-blue-500 to-cyan-500' },
  { name: 'Placement Report 2024', type: 'placement', desc: 'Placement statistics and company-wise data', color: 'from-violet-500 to-purple-500' },
  { name: 'Faculty Performance', type: 'faculty', desc: 'Publications, feedback, and evaluation', color: 'from-teal-500 to-green-500' },
  { name: 'Academic Progress Report', type: 'academic', desc: 'IA marks and CGPA analysis', color: 'from-orange-500 to-amber-500' },
].map(({ name, desc, color, type }) => (
  <div key={name}
       className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-between">

    <div>
      <div className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${color} mr-2`}></div>
      <span className="text-slate-900 font-semibold">{name}</span>
      <p className="text-slate-600 text-sm mt-1">{desc}</p>
    </div>

    <button
      onClick={() => downloadExcel(type)}
      className="flex-shrink-0 p-2 bg-slate-100 hover:bg-blue-100 border border-slate-200 rounded-xl transition-all ml-4"
    >
      <Download className="w-5 h-5" />
    </button>

     </div>
     ))}
                </motion.div>
            )}
             {selectedStudent && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="glass-card p-6 w-full max-w-md">
                        <h2 className="text-white text-lg font-bold mb-4">
                            Student Details
                        </h2>

                        <p><b>Name:</b> {selectedStudent.name}</p>
                        <p><b>Roll No:</b> {selectedStudent.rollNo}</p>
                        <p><b>Year:</b> {selectedStudent.year}</p>
                        <p><b>Section:</b> {selectedStudent.section}</p>
                        <p><b>Attendance:</b> {selectedStudent.attendance}</p>
                        <p><b>CGPA:</b> {selectedStudent.cgpa}</p>

                        <button
                            onClick={() => setSelectedStudent(null)}
                            className="mt-4 px-4 py-2 bg-blue-600 rounded text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
