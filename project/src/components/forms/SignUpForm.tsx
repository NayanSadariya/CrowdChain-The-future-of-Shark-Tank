import React from 'react';
import { UserPlus, Mail, Key, User as UserIcon } from 'lucide-react';
import { SignUpFormData } from '../../types';

interface SignUpFormProps {
  formData: SignUpFormData;
  error: string;
  role: 'CREATOR' | 'INVESTOR';
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  formData,
  error,
  role,
  onSubmit,
  onChange,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white-700 mb-1">
          Full Name
        </label>
        <div className="relative">
          <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400 h-5 w-5" />
          <input
            type="text"
            id="name"
            name="name"
            className="input-field pl-10"
            value={formData.name}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400 h-5 w-5" />
          <input
            type="email"
            id="email"
            name="email"
            className="input-field pl-10"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-white-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400 h-5 w-5" />
          <input
            type="password"
            id="password"
            name="password"
            className="input-field pl-10"
            value={formData.password}
            onChange={onChange}
            required
            minLength={8}
          />
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white-700 mb-1">
          Confirm Password
        </label>
        <div className="relative">
          <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400 h-5 w-5" />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="input-field pl-10"
            value={formData.confirmPassword}
            onChange={onChange}
            required
            minLength={8}
          />
        </div>
      </div>

      {role === 'CREATOR' && (
        <>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-white-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="input-field"
              value={formData.companyName}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label htmlFor="projectCategory" className="block text-sm font-medium text-white-700 mb-1">
              Project Category
            </label>
            <select
              id="projectCategory"
              name="projectCategory"
              className="input-field"
              value={formData.projectCategory}
              onChange={onChange}
              required
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="art">Art & Creative</option>
              <option value="business">Business</option>
              <option value="social">Social Impact</option>
            </select>
          </div>
        </>
      )}

      <button type="submit" className="btn-primary w-full">
        <UserPlus className="h-5 w-5" />
        <span>Create Account</span>
      </button>
    </form>
  );
};

export default SignUpForm;