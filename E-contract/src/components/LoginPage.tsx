import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, Mail, Lock } from 'lucide-react';
import { connectWallet, hashPassword } from '../utils/web3';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const web3 = await connectWallet();
      const passwordHash = hashPassword(password);
      navigate('/contract');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-zinc-900/50 backdrop-blur-lg rounded-xl p-8 w-full max-w-md border border-[#a9ff1c]/20">
        <div className="flex items-center justify-center mb-8">
          <Wallet className="text-[#a9ff1c] w-12 h-12 mr-3" />
          <h1 className="text-3xl font-bold text-white">CrowdChain</h1>
        </div>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-lg p-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[#a9ff1c] mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a9ff1c]" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/30 border border-[#a9ff1c]/30 rounded-lg py-2 px-10 text-white focus:outline-none focus:border-[#a9ff1c]"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[#a9ff1c] mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a9ff1c]" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/30 border border-[#a9ff1c]/30 rounded-lg py-2 px-10 text-white focus:outline-none focus:border-[#a9ff1c]"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#a9ff1c] hover:bg-[#98e619] text-black font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Connecting to Wallet...' : 'Connect Wallet'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;