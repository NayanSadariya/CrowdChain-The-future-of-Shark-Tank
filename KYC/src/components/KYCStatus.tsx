import React from 'react';

interface KYCStatusProps {
  status: string;
}

export function KYCStatus({ status }: KYCStatusProps) {
  if (!status) return null;

  return (
    <div 
      className={`mb-4 p-4 rounded-md text-center font-medium ${
        status.includes('successful') 
          ? 'bg-green-100 text-green-700 border border-green-300' 
          : 'bg-red-100 text-red-700 border border-red-300'
      }`}
    >
      <div className="flex items-center justify-center">
        <span className="ml-2">{status}</span>
      </div>
    </div>
  );
}