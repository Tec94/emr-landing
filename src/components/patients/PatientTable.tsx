import React from 'react';
import { Eye } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  lastVisit: string;
  status: 'Active' | 'Inactive';
}

export default function PatientTable({ patients }: { patients: Patient[] }) {
  return (
    <div className="bg-white rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-4 font-medium text-gray-500">Name</th>
              <th className="text-left p-4 font-medium text-gray-500">Date of Birth</th>
              <th className="text-left p-4 font-medium text-gray-500">Gender</th>
              <th className="text-left p-4 font-medium text-gray-500">Phone</th>
              <th className="text-left p-4 font-medium text-gray-500">Last Visit</th>
              <th className="text-left p-4 font-medium text-gray-500">Status</th>
              <th className="text-left p-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b last:border-b-0">
                <td className="p-4">{patient.name}</td>
                <td className="p-4">{patient.dateOfBirth}</td>
                <td className="p-4">{patient.gender}</td>
                <td className="p-4">{patient.phone}</td>
                <td className="p-4">{patient.lastVisit}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    patient.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {patient.status}
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