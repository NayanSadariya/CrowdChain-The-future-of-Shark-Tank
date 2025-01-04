import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../store/useStore';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: 'CREATOR' | 'INVESTOR';
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRole }) => {
  const user = useStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-light-100">
          Access Denied
        </h2>
        <p className="text-light-300 mt-2">
          You must be logged in as a {requiredRole.toLowerCase()} to access this feature.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;