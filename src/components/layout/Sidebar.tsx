import React from 'react';
import { LayoutDashboard, Users, Calendar, FileText, Pill, Flask, Receipt, CreditCard, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
  { icon: <Users size={20} />, label: 'Patients', path: '/patients' },
  { icon: <Calendar size={20} />, label: 'Appointments', path: '/appointments' },
  { icon: <FileText size={20} />, label: 'Medical Records', path: '/records' },
  { icon: <Pill size={20} />, label: 'Medications', path: '/medications' },
  { icon: <Flask size={20} />, label: 'Lab Results', path: '/lab-results' },
  { icon: <Receipt size={20} />, label: 'Billing', path: '/billing' },
  { icon: <CreditCard size={20} />, label: 'Subscription', path: '/subscription' },
  { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r h-screen fixed left-0 top-16">
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 ${
              location.pathname === item.path
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}