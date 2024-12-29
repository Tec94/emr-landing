import React from 'react';

interface PricingToggleProps {
  selected: 'clinics' | 'hospitals';
  onChange: (value: 'clinics' | 'hospitals') => void;
}

export default function PricingToggle({ selected, onChange }: PricingToggleProps) {
  return (
    <div className="flex justify-center space-x-2 p-1 bg-gray-100 rounded-lg w-fit mx-auto mb-12">
      <button
        className={`px-6 py-2 rounded-md ${
          selected === 'clinics' 
            ? 'bg-white shadow text-gray-900' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onChange('clinics')}
      >
        Clinics
      </button>
      <button
        className={`px-6 py-2 rounded-md ${
          selected === 'hospitals' 
            ? 'bg-white shadow text-gray-900' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => onChange('hospitals')}
      >
        Hospitals
      </button>
    </div>
  );
}