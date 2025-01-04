import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { createUser } from '../utils/auth';
import SignUpForm from '../components/forms/SignUpForm';
import type { SignUpFormData } from '../types';
import { app } from '../../firebase';
import { getDatabase, ref, set } from 'firebase/database';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
  const [role, setRole] = useState<'CREATOR' | 'INVESTOR'>('INVESTOR');
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    projectCategory: '',
  });
  const [error, setError] = useState('');

  const db = getDatabase(app); // Ensure app is properly initialized in your firebase.js/ts file

  // Handle the Sign-Up button click
  const handleSignUpClick = async (e: { preventDefault: () => void; }) => {
    const { name, email, password, confirmPassword } = formData;
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!name || !email || !password) {
      alert('All fields are required');
      return;
    }

    const userRef = ref(db, `users/`); // Replace dots in email to make it a valid Firebase key

    set(userRef, {
      name,
      email,
      password,
      role,
    })
      try {
        const user = await createUser({
          email: formData.email,
          password: formData.password,
          role,
          name: formData.name,
        });
  
        if (!user) {
          setError('Email already exists');
          return;
        }
  
        setUser(user);
        navigate('/dashboard');
      } catch (error : unknown) {
        setError(`Failed to create account ${error}`);
      }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
        <p className="text-gray-600 mt-2">Join LavaCoins to start your journey</p>
      </div>

      <div className="card p-6">
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              role === 'INVESTOR'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 text-gray-600 hover:border-orange-200'
            }`}
            onClick={() => setRole('INVESTOR')}
          >
            Investor
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              role === 'CREATOR'
                ? 'border-orange-500 bg-orange-50 text-orange-700'
                : 'border-gray-200 text-gray-600 hover:border-orange-200'
            }`}
            onClick={() => setRole('CREATOR')}
          >
            Creator
          </button>
        </div>

        <SignUpForm
          formData={formData}
          error={error}
          role={role}
          onSubmit={handleSignUpClick}
          onChange={handleChange}
        />

        <div className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:text-orange-600">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;