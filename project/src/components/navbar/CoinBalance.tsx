import React from 'react';
import { Coins } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { formatCoinBalance } from '../../utils/format';

const CoinBalance: React.FC = () => {
  const user = useStore((state) => state.user);
  
  if (!user) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-800 rounded-full">
      <Coins className="h-5 w-5 text-primary animate-coin-pulse" />
      <span className="font-medium text-light-100">
        {formatCoinBalance(user.balance)} LC
      </span>
    </div>
  );
};

export default CoinBalance;