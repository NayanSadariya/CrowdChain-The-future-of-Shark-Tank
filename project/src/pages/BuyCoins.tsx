import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, AlertCircle } from 'lucide-react';
import { useWeb3 } from '../hooks/useWeb3';
import { useStore } from '../store/useStore';
import { authenticateUser } from '../utils/auth';
import TransactionStatus from '../components/transactions/TransactionStatus';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex items-center gap-2 text-red-500">
    <AlertCircle className="h-5 w-5" />
    <span>{message}</span>
  </div>
);

const BuyCoins: React.FC = () => {
  const navigate = useNavigate();
  const { buyTokens } = useWeb3();
  const [amount, setAmount] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const user = await authenticateUser(userId, password);
      if (!user) {
        setError('Invalid credentials');
        return;
      }
      setIsAuthenticated(true);
    } catch (err) {
      setError('Authentication failed');
    }
  };

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    try {
      await buyTokens(Number(amount));
      navigate('/dashboard');
    } catch (err) {
      setError('Transaction failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-light-100">Buy Lava Coins</h1>
        <p className="text-light-300 mt-2">Purchase Lava Coins using MATIC</p>
      </div>

      {!isAuthenticated ? (
        <form onSubmit={handleAuthentication} className="card p-6 space-y-6">
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-light-300 mb-1">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="input-field"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-light-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <ErrorMessage message={error} />}

          <button type="submit" className="btn-primary w-full">
            Authenticate
          </button>
        </form>
      ) : (
        <form onSubmit={handlePurchase} className="card p-6 space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-light-300 mb-1">
              Amount (LC)
            </label>
            <div className="relative">
              <input
                type="number"
                id="amount"
                min="1"
                step="1"
                className="input-field pr-16"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <Coins className="h-4 w-4 text-primary" />
                <span className="text-light-300">LC</span>
              </div>
            </div>
            <p className="text-sm text-light-300 mt-1">
              1 MATIC = 100 LC
            </p>
          </div>

          {error && <ErrorMessage message={error} />}

          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Buy Coins'}
          </button>

          {isProcessing && <TransactionStatus />}
        </form>
      )}
    </div>
  );
};

export default BuyCoins;
