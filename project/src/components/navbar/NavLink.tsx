import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
        isActive
          ? 'text-primary bg-dark-800'
          : 'text-light-300 hover:text-primary hover:bg-dark-800'
      }`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;