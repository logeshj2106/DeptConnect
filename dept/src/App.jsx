import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PortalLayout from './layouts/PortalLayout'

// Public Pages
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Faculty from './pages/Faculty'
import CurriculumLabs from './pages/CurriculumLabs'
import Research from './pages/Research'
import Placements from './pages/Placements'
import Events from './pages/Events'
import StudentCorner from './pages/StudentCorner'
import eLearning from './pages/eLearning'
import Login from './pages/Login'

// Portal Pages
import StudentDashboard from './pages/portal/StudentDashboard'
import StudentAttendance from './pages/portal/StudentAttendance'
import StudentTimetable from './pages/portal/StudentTimetable'
import StudentResults from './pages/portal/StudentResults'
import StudentFee from './pages/portal/StudentFee'

import FacultyDashboard from './pages/portal/FacultyDashboard'
import FacultyClasses from './pages/portal/FacultyClasses'
import FacultyPerformance from './pages/portal/FacultyPerformance'

import AdminPanel from './pages/portal/AdminPanel'
import AdminStudents from './pages/portal/AdminStudents'
import AdminFaculty from './pages/portal/AdminFaculty'
import AdminReports from './pages/portal/AdminReports'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/curriculum-labs" element={<CurriculumLabs />} />
          <Route path="/research" element={<Research />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/student-corner" element={<StudentCorner />} />
          <Route path="/elearning" element={<eLearning />} />
        </Route>

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Portal Routes */}
        <Route path="/portal" element={<PortalLayout />}>

          <Route index element={<Navigate to="/portal/student" replace />} />

          {/* Student */}
          <Route path="student">
            <Route index element={<StudentDashboard />} />
            <Route path="attendance" element={<StudentAttendance />} />
            <Route path="timetable" element={<StudentTimetable />} />
            <Route path="results" element={<StudentResults />} />
            <Route path="fee" element={<StudentFee />} />
          </Route>

          {/* Faculty */}
          <Route path="faculty">
            <Route index element={<FacultyDashboard />} />
            <Route path="attendance" element={<FacultyClasses />} />
            <Route path="classes" element={<FacultyClasses />} />
            <Route path="performance" element={<FacultyPerformance />} />
          </Route>

          {/* Admin */}
          <Route path="admin">
              <Route index element={<AdminPanel />} />
              <Route path="students" element={<AdminStudents />} />
              <Route path="faculty" element={<AdminFaculty />} />
              <Route path="reports" element={<AdminReports />} />
          </Route>

        </Route>
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
