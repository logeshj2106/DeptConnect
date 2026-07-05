import React, { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import {
    LayoutDashboard, ClipboardList, Calendar, BookOpen,
    CreditCard, LogOut, GraduationCap, Menu,
    Users, BarChart3, Bell
} from 'lucide-react'

const studentLinks = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/portal/student' },
    { label: 'Attendance', icon: ClipboardList, path: '/portal/student/attendance' },
    { label: 'Timetable', icon: Calendar, path: '/portal/student/timetable' },
    { label: 'Results', icon: BookOpen, path: '/portal/student/results' },
    { label: 'Fee Status', icon: CreditCard, path: '/portal/student/fee' },
]

const facultyLinks = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/portal/faculty' },
    { label: 'Mark Attendance', icon: ClipboardList, path: '/portal/faculty/attendance' },
    { label: 'My Classes', icon: Calendar, path: '/portal/faculty/classes' },
    { label: 'Performance', icon: BarChart3, path: '/portal/faculty/performance' },
]

const adminLinks = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/portal/admin' },
  { label: 'Students', icon: Users, path: '/portal/admin/students' },
  { label: 'Faculty', icon: GraduationCap, path: '/portal/admin/faculty' },
  { label: 'Reports', icon: BarChart3, path: '/portal/admin/reports' },
]

export default function PortalLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    let role = 'Student'

    if (location.pathname.startsWith('/portal/admin')) {
       role = 'Admin'
    } else if (location.pathname.startsWith('/portal/faculty')) {
       role = 'Faculty'
    }

    const links = role === 'Faculty' ? facultyLinks
        : role === 'Admin' ? adminLinks : studentLinks

    const isActive = (path) => {
        if (role === 'Student' || role === 'Faculty') {
            return location.pathname === path || location.pathname === path + '/'
        }
        return location.pathname === path
    }

    const roleBg = role === 'Faculty' ? 'bg-teal-600'
        : role === 'Admin' ? 'bg-indigo-600' : 'bg-blue-600'

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 shadow-md transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-auto`}>

                {/* Logo */}
                <div className="p-6 border-b border-gray-100">
                    <Link to="/" className="flex items-center gap-2">
                        <div className={`w-9 h-9 rounded ${roleBg} flex items-center justify-center`}>
                            <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-gray-900 text-lg font-bold tracking-wide">DeptVerse</span>
                            <p className={`text-xs font-medium ${roleBg === 'bg-blue-600' ? 'text-blue-600' : roleBg === 'bg-teal-600' ? 'text-teal-600' : 'text-indigo-600'}`}>
                                {role} Portal
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Role Badge */}
                <div className="px-4 py-4">
                    <div className={`p-4 rounded-lg ${roleBg} shadow flex items-center gap-3`}>
                        <div className={`w-10 h-10 rounded-lg ${roleBg} flex items-center justify-center text-white font-bold text-sm`}>
                            {role === 'Student' ? 'ST' : role === 'Faculty' ? 'FC' : 'AD'}
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold tracking-wide">
                                {role === 'Student' ? 'Arun Kumar' : role === 'Faculty' ? 'Dr. Meenakshi' : 'Administrator'}
                            </p>
                            <p className="text-white/80 text-xs">{role}</p>
                        </div>
                    </div>
                </div>

                {/* Nav Links */}
                <nav className="px-4 py-2 space-y-1">
                    {links.map(({ label, icon: Icon, path }) => (
                        <Link key={label} to={path}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(path) 
                                ? 'bg-blue-600 text-white' 
                                : 'text-gray-600 hover:bg-gray-100'}`}>
                            <Icon className="w-5 h-5" />
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Bottom actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
                    <button
                        onClick={() => navigate('/login')}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors">
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded">
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="hidden lg:block">
                        <h2 className="text-gray-900 font-semibold">{role} Dashboard</h2>
                        <p className="text-gray-500 text-xs">Welcome back!</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full"></span>
                        </button>
                        <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                            ← Back to Website
                        </Link>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6 overflow-auto bg-gray-100">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
