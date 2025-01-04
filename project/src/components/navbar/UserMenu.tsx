import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Settings } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);

  useOnClickOutside(menuRef, () => setIsOpen(false));

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-dark-800 transition-colors"
      >
        <User className="h-5 w-5 text-primary" />
        <span className="text-light-100">{user.name}</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => navigate('/profile')} className="dropdown-item">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </button>
          <button onClick={handleLogout} className="dropdown-item">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;