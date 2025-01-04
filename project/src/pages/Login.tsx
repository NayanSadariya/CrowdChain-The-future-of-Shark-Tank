import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { authenticateUser } from '../utils/auth';
import LoginForm from '../components/forms/LoginForm';
import type { LoginFormData } from '../types';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const user = await authenticateUser(formData.email, formData.password);
      if (!user) {
        setError('Wrong ID or password');
        return;
      }

      setUser(user);
      navigate('/dashboard');
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to continue to LavaCoins</p>
      </div>

      <LoginForm
        formData={formData}
        error={error}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />

      <div className="text-center text-sm text-gray-600 mt-6">
        <Link to="/forgot-password" className="hover:text-orange-500">
          Forgot your password?
        </Link>
        <div className="mt-2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-500 hover:text-orange-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

// Add default export here
export default Login;
