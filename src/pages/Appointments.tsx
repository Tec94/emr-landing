import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Appointments() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          <CalendarIcon size={20} />
          <span>New Appointment</span>
        </button>
      </div>
      <div className="bg-white rounded-lg border p-6">
        <p className="text-gray-500 text-center">No appointments scheduled for today</p>
      </div>
    </div>
  );
}