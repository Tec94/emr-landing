import React from 'react';
import PatientTable from '../components/patients/PatientTable';
import { UserPlus } from 'lucide-react';

const mockPatients = [
  {
    id: '1',
    name: 'John Smith',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    phone: '(555) 123-4567',
    lastVisit: '2024-03-15',
    status: 'Active' as const,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    dateOfBirth: '1990-07-22',
    gender: 'Female',
    phone: '(555) 234-5678',
    lastVisit: '2024-03-10',
    status: 'Active' as const,
  },
  {
    id: '3',
    name: 'Michael Brown',
    dateOfBirth: '1978-11-30',
    gender: 'Male',
    phone: '(555) 345-6789',
    lastVisit: '2024-02-28',
    status: 'Inactive' as const,
  },
];

export default function Patients() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          <UserPlus size={20} />
          <span>Add Patient</span>
        </button>
      </div>
      <PatientTable patients={mockPatients} />
    </div>
  );
}