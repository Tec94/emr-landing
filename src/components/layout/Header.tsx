import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <header className="h-16 bg-white border-b fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">MedCare EMR</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <span className="font-medium">DR</span>
        </div>
      </div>
    </header>
  );
}