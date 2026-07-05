import React, { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"
import { fetchData } from "../../services/api"
import Loader from "../../components/Loader"

export default function AdminReports() {
  const [attendanceData, setAttendanceData] = useState([])
  const [summary, setSummary] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("/admin/attendance-report")
        setAttendanceData(data.sections)
        setSummary(data.summary)
      } catch (error) {
        console.log("Using fallback attendance data")

        setAttendanceData([
          { section: "III A", percentage: 92 },
          { section: "III B", percentage: 85 },
        ])

        setSummary({
          averageAttendance: 86,
          below75: 18,
        })
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <Loader text="Fetching report data..." />

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold">Attendance Report</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p>Average Attendance</p>
          <p className="text-2xl font-bold">{summary.averageAttendance}%</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p>Below 75%</p>
          <p className="text-2xl font-bold">{summary.below75} Students</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="section" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}