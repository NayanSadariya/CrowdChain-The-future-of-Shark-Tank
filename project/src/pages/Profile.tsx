import React from 'react';
import { useStore } from '../store/useStore';
import { Wallet, History, Settings } from 'lucide-react';
import { useWeb3 } from '../hooks/useWeb3'; // Import useWeb3 hook

const Profile: React.FC = () => {
  const user = useStore((state) => state.user);
  const transactions = useStore((state) => state.transactions);
  
  // Destructure buyTokens and withdrawTokens from useWeb3 hook
  const { buyTokens, withdrawTokens } = useWeb3();

  if (!user) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">Please log in to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        <button className="btn-primary">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center space-x-4">
            <Wallet className="h-8 w-8 text-orange-500" />
            <div>
              <h2 className="text-xl font-semibold text-white-800">KYC Verifications</h2>
              <p className="text-3xl font-bold text-orange-500 mt-2">Done</p>
            </div>
          </div>

          {/* Buttons to interact with the smart contract */}
          <div className="mt-6 space-y-2">
          <button
  className="btn-primary w-full"
  onClick={() => {
    window.location.href = "http://localhost:5174/";
  }}
>
  Verify KYC Details
</button>

            
            <button
              className="w-full px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
              onClick={() => {
                window.location.href = "http://localhost:5173/";
              }} 
            >
              Make a E-Contract
            </button>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold text-white-800 mb-4">Account Details</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-white-600">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            {/* <div>
              <p className="text-sm text-white-600">Wallet Address</p>
              <p className="font-medium font-mono text-sm">{user.address}</p>
            </div> */}
            <div>
              <p className="text-sm text-white-600">Role</p>
              <p className="font-medium">{user.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center space-x-2 mb-6">
          <History className="h-6 w-6 text-gray-600" />
          <h2 className="text-xl font-semibold text-white-800">Your All Contarcts</h2>
        </div>
        
        {transactions.length === 0 ? (
          <p className="text-gray-400 text-center py-4">No Contracts Yet</p>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{transaction.type}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${transaction.type === 'DEPOSIT' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.type === 'DEPOSIT' ? '+' : '-'}{transaction.amount} LC
                  </p>
                  <p className="text-sm text-gray-600">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
