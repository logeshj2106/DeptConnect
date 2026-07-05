import React, { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"
import { fetchData } from "../../services/api"
import Loader from "../../components/Loader"

export default function AdminFaculty() {
  const [facultyData, setFacultyData] = useState([])
  const [summary, setSummary] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData("/admin/faculty-report")
        setFacultyData(data.performance)
        setSummary(data.summary)
      } catch (error) {
        console.log("Using fallback faculty data")

        setFacultyData([
          { name: "Dr. Meenakshi", publications: 24 },
          { name: "Prof. Arjun", publications: 18 },
        ])

        setSummary({
          totalFaculty: 42,
          totalPublications: 215,
          avgExperience: 12,
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
        <h2 className="text-2xl font-bold">Faculty Report</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p>Total Faculty</p>
          <p className="text-2xl font-bold">{summary.totalFaculty}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p>Total Publications</p>
          <p className="text-2xl font-bold">{summary.totalPublications}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p>Average Experience</p>
          <p className="text-2xl font-bold">{summary.avgExperience} yrs</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={facultyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="publications" fill="#7c3aed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}