import React, { useState, useRef } from 'react';
import { Coins, Plus, ArrowDownCircle, History } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { formatCoinBalance } from '../../utils/format';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const CoinBalanceDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const user = useStore((state) => state.user);
  
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors"
        title="Your Lava Coin Balance"
      >
        <Coins className="h-5 w-5 text-primary animate-coin-pulse" />
        <span className="font-medium text-light-100">
          {formatCoinBalance(user.balance)} LC
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-dark-800 rounded-lg shadow-lg py-1 z-50">
          <Link
            to="/buy-coins"
            className="flex items-center gap-2 px-4 py-2 text-light-100 hover:bg-dark-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Buy Lava Coins</span>
          </Link>
          <Link
            to="/withdraw"
            className="flex items-center gap-2 px-4 py-2 text-light-100 hover:bg-dark-700 transition-colors"
          >
            <ArrowDownCircle className="h-4 w-4" />
            <span>Withdraw</span>
          </Link>
          <Link
            to="/transactions"
            className="flex items-center gap-2 px-4 py-2 text-light-100 hover:bg-dark-700 transition-colors"
          >
            <History className="h-4 w-4" />
            <span>Transaction History</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CoinBalanceDropdown;