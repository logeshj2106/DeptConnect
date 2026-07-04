import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Download } from 'lucide-react'

export default function StudentFee() {
    const fees = [
        { term: 'Semester Fee', amount: '₹45,000', status: 'Paid', date: 'July 10, 2024', paidAmount: '₹45,000', dueAmount: '₹0' },
        { term: 'Hostel Fee', amount: '₹20,000', status: 'Paid', date: 'July 12, 2024', paidAmount: '₹20,000', dueAmount: '₹0' },
        { term: 'Bus Fee', amount: '₹8,000', status: 'Pending', date: 'Due: Aug 1, 2024', paidAmount: '₹0', dueAmount: '₹8,000' },
        { term: 'Lab Fee', amount: '₹5,000', status: 'Paid', date: 'July 15, 2024', paidAmount: '₹5,000', dueAmount: '₹0' },
        { term: 'Exam Fee', amount: '₹3,000', status: 'Pending', date: 'Due: Oct 15, 2024', paidAmount: '₹0', dueAmount: '₹3,000' },
    ]

    const totalAmount = fees.reduce((sum, f) => sum + parseInt(f.amount.replace(/,/g, '')), 0)
    const totalPaid = fees.filter(f => f.status === 'Paid').reduce((sum, f) => sum + parseInt(f.amount.replace(/,/g, '')), 0)
    const totalDue = totalAmount - totalPaid

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-l-blue-600">
                <h1 className="text-2xl font-bold text-gray-900">Fee Status</h1>
                <p className="text-gray-500 text-sm mt-1">Academic Year 2024-25</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
                    <p className="text-gray-500 text-sm">Total Amount</p>
                    <p className="text-2xl font-bold text-gray-900">₹{totalAmount.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-teal-200 border-l-4 border-l-teal-500">
                    <p className="text-gray-500 text-sm">Amount Paid</p>
                    <p className="text-2xl font-bold text-teal-600">₹{totalPaid.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border border-red-200 border-l-4 border-l-red-500">
                    <p className="text-gray-500 text-sm">Balance Due</p>
                    <p className="text-2xl font-bold text-red-600">₹{totalDue.toLocaleString()}</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
                <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                    <h2 className="text-gray-900 font-semibold text-lg">Fee Details</h2>
                    <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                        <Download className="w-4 h-4" />
                        Download Receipt
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <th className="text-left px-4 py-3 text-gray-600 font-medium">Fee Type</th>
                                <th className="text-right px-4 py-3 text-gray-600 font-medium">Total Amount</th>
                                <th className="text-right px-4 py-3 text-gray-600 font-medium">Paid</th>
                                <th className="text-right px-4 py-3 text-gray-600 font-medium">Due</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Status</th>
                                <th className="text-center px-4 py-3 text-gray-600 font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {fees.map((fee) => (
                                <tr key={fee.term} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 text-gray-900 font-medium">{fee.term}</td>
                                    <td className="px-4 py-3 text-right text-gray-600">₹{parseInt(fee.amount).toLocaleString()}</td>
                                    <td className="px-4 py-3 text-right text-teal-600">₹{parseInt(fee.paidAmount).toLocaleString()}</td>
                                    <td className="px-4 py-3 text-right text-red-600">₹{parseInt(fee.dueAmount).toLocaleString()}</td>
                                    <td className="px-4 py-3 text-center">
                                        {fee.status === 'Paid' ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700">
                                                <CheckCircle2 className="w-3 h-3" /> Paid
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
                                                <AlertCircle className="w-3 h-3" /> Pending
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-center text-gray-500">{fee.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    )
}
