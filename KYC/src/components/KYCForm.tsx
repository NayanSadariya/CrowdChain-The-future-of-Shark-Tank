import React, { useState } from 'react';
import { Upload, User, MapPin, Calendar, CreditCard, X } from 'lucide-react';
import { KYCFormData, ValidationErrors } from '../types/kyc';
import { validateAadharNumber, formatAadharNumber, verifyAadharNumber } from '../utils/validation';
import { theme } from '../styles/theme';
import { KYCHeader } from './KYCHeader';
import { KYCStatus } from './KYCStatus';
import { KYCFormFields } from './KYCFormFields';

export default function KYCForm() {
  const [formData, setFormData] = useState<KYCFormData>({
    aadharNumber: '',
    fullName: '',
    dateOfBirth: '',
    address: '',
    photo: null,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string>('');

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit KYC verification?')) {
      setFormData({
        aadharNumber: '',
        fullName: '',
        dateOfBirth: '',
        address: '',
        photo: null,
      });
      setVerificationStatus('');
      setErrors({});
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!validateAadharNumber(formData.aadharNumber)) {
      newErrors.aadharNumber = 'Please enter a valid 12-digit Aadhar number';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.photo) {
      newErrors.photo = 'Please upload a photo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const isValid = verifyAadharNumber(formData.aadharNumber);
      setVerificationStatus(isValid 
        ? 'KYC verification successful!' 
        : 'KYC verification unsuccessful. Please check your Aadhar number.');
      
    } catch (error) {
      setVerificationStatus('Error during KYC verification. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }));
      setErrors(prev => ({ ...prev, photo: undefined }));
    }
  };

  const handleAadharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadharNumber(e.target.value);
    setFormData(prev => ({ ...prev, aadharNumber: formatted }));
    setErrors(prev => ({ ...prev, aadharNumber: undefined }));
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <KYCHeader onExit={handleExit} />
        
        <div className="px-8 py-6">
          <KYCStatus status={verificationStatus} />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <KYCFormFields 
              formData={formData}
              errors={errors}
              onAadharChange={handleAadharChange}
              onPhotoChange={handlePhotoChange}
              setFormData={setFormData}
            />

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ 
                  backgroundColor: isSubmitting ? '#ccc' : theme.colors.primary,
                  color: theme.colors.black,
                  borderColor: theme.colors.primary
                }}
                className="flex-1 py-2 px-4 border rounded-md shadow-sm text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? 'Verifying...' : 'Submit KYC Verification'}
              </button>
              <button
  type="button"
  onClick={() => {
    window.location.href = "http://localhost:5175/profile";
  }}
  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
>
  Exit
</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}