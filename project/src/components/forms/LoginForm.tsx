import React from 'react';
import { LogIn, User, Key } from 'lucide-react';
import { LoginFormData } from '../../types';

interface LoginFormProps {
  formData: LoginFormData;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  error,
  onSubmit,
  onChange,
}) => {
  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-6">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white-400 h-5 w-5" />
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
          />
        </div>
      </div>

      <button type="submit" className="btn-primary w-full">
        <LogIn className="h-5 w-5" />
        <span>Sign In</span>
      </button>
    </form>
  );
};

export default LoginForm;