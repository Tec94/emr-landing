import React from 'react';
import { FilePlus, Eye } from 'lucide-react';

const mockRecords = [
  {
    id: '1',
    patient: 'John Smith',
    type: 'Progress Note',
    date: '2024-03-15',
    provider: 'Dr. Wilson',
    status: 'Final',
  },
  {
    id: '2',
    patient: 'Sarah Johnson',
    type: 'Lab Report',
    date: '2024-03-14',
    provider: 'Dr. Brown',
    status: 'Preliminary',
  },
];

export default function MedicalRecords() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Medical Records</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          <FilePlus size={20} />
          <span>New Record</span>
        </button>
      </div>
      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-4 font-medium text-gray-500">Patient</th>
              <th className="text-left p-4 font-medium text-gray-500">Type</th>
              <th className="text-left p-4 font-medium text-gray-500">Date</th>
              <th className="text-left p-4 font-medium text-gray-500">Provider</th>
              <th className="text-left p-4 font-medium text-gray-500">Status</th>
              <th className="text-left p-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockRecords.map((record) => (
              <tr key={record.id} className="border-b last:border-b-0">
                <td className="p-4">{record.patient}</td>
                <td className="p-4">{record.type}</td>
                <td className="p-4">{record.date}</td>
                <td className="p-4">{record.provider}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    record.status === 'Final'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}