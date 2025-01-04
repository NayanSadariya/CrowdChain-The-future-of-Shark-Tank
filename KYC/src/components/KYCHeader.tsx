import React from 'react';
import { X } from 'lucide-react';
import { theme } from '../styles/theme';

interface KYCHeaderProps {
  onExit: () => void;
}

export function KYCHeader({ onExit }: KYCHeaderProps) {
  return (
    <div style={{ backgroundColor: theme.colors.primaryLight }} className="px-8 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-black">
          Aadhar Card KYC Verification
        </h2>
        <button
          onClick={onExit}
          className="p-2 text-black hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
          title="Exit KYC"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}