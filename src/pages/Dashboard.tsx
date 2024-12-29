import React from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import { Users, Calendar, FileText, DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Patients"
          value={3}
          icon={Users}
          subtitle="+0 from last month"
        />
        <StatsCard
          title="Today's Appointments"
          value={0}
          icon={Calendar}
          subtitle="0 remaining"
        />
        <StatsCard
          title="Medical Records"
          value={2}
          icon={FileText}
          subtitle="+2 this year"
        />
        <StatsCard
          title="Revenue"
          value="$150"
          icon={DollarSign}
          subtitle="+100.0% from last month"
        />
      </div>
    </div>
  );
}