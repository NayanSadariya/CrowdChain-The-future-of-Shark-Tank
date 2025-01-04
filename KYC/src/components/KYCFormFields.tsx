import React from 'react';
import { User, MapPin, Calendar, CreditCard, Upload } from 'lucide-react';
import { KYCFormData, ValidationErrors } from '../types/kyc';

interface KYCFormFieldsProps {
  formData: KYCFormData;
  errors: ValidationErrors;
  onAadharChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<KYCFormData>>;
}

export function KYCFormFields({ 
  formData, 
  errors, 
  onAadharChange, 
  onPhotoChange, 
  setFormData 
}: KYCFormFieldsProps) {
  return (
    <>
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <CreditCard className="w-4 h-4 mr-2" />
          Aadhar Number
        </label>
        <input
          type="text"
          value={formData.aadharNumber}
          onChange={onAadharChange}
          maxLength={14}
          placeholder="XXXX XXXX XXXX"
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.aadharNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.aadharNumber}</p>
        )}
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <User className="w-4 h-4 mr-2" />
          Full Name
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Calendar className="w-4 h-4 mr-2" />
          Date of Birth
        </label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={e => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.dateOfBirth && (
          <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
        )}
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <MapPin className="w-4 h-4 mr-2" />
          Address
        </label>
        <textarea
          value={formData.address}
          onChange={e => setFormData(prev => ({ ...prev, address: e.target.value }))}
          rows={3}
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address}</p>
        )}
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Upload className="w-4 h-4 mr-2" />
          Upload Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={onPhotoChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.photo && (
          <p className="mt-1 text-sm text-red-600">{errors.photo}</p>
        )}
      </div>
    </>
  );
}