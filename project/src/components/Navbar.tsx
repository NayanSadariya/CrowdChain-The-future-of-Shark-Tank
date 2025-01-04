import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Search, Plus, LogIn } from 'lucide-react';
import { useStore } from '../store/useStore';
import NavLink from './navbar/NavLink';
import CoinBalanceDropdown from './navbar/CoinBalanceDropdown';
import UserMenu from './navbar/UserMenu';

const Navbar: React.FC = () => {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-dark-900 border-b border-dark-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Flame className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-light-100">CrowdChain</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/dashboard" icon={Search}>
              Dashboard
            </NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            {user ? (
              <>
                {user.role === 'CREATOR' && (
                  <NavLink to="/create-project" icon={Plus}>
                    Add Project
                  </NavLink>
                )}
                {/* <CoinBalanceDropdown /> */}
                <UserMenu />
              </>
            ) : (
              <Link 
                to="/login"
                className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-dark-900 rounded-lg transition-colors font-medium"
              >
                <LogIn className="h-5 w-5" />
                <span>Log In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;