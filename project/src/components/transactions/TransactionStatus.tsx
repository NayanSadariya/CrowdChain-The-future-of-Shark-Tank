import React from 'react';
import { Loader2 } from 'lucide-react';

const TransactionStatus: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-light-300">
      <Loader2 className="h-5 w-5 animate-spin" />
      <span>Processing transaction...</span>
    </div>
  );
};

export default TransactionStatus;