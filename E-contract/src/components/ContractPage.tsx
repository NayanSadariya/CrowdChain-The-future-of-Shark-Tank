import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, LogOut, Users, Percent, Shield } from 'lucide-react';

const ContractPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900/50 backdrop-blur-lg rounded-xl p-8 border border-[#a9ff1c]/20">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Coins className="text-[#a9ff1c] w-8 h-8 mr-3" />
              <h1 className="text-3xl font-bold text-white">CrowdChain Platform Agreement</h1>
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              <LogOut size={20} />
              Exit
            </button>
          </div>

          <div className="space-y-6 text-gray-300">
            <section className="bg-black/30 border border-[#a9ff1c]/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#a9ff1c] mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Platform Overview
              </h2>
              <p className="mb-4">
                CrowdChain serves as a decentralized bridge between innovative creators and forward-thinking investors. 
                Our platform facilitates secure, transparent, and efficient funding transactions through blockchain technology.
              </p>
            </section>

            <section className="bg-black/30 border border-[#a9ff1c]/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#a9ff1c] mb-4 flex items-center gap-2">
                <Percent className="w-6 h-6" />
                Platform Fees
              </h2>
              <div className="space-y-4">
                <p>CrowdChain charges a minimal platform fee of 0.5% on successful investments.</p>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-[#a9ff1c]">Fee Breakdown Example:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Investment Amount: 100 ETH</li>
                    <li>Platform Fee (0.5%): 0.5 ETH</li>
                    <li>Creator Receives: 99.5 ETH</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-black/30 border border-[#a9ff1c]/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#a9ff1c] mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Smart Contract Terms
              </h2>
              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-[#a9ff1c] mb-2">For Creators:</p>
                  <ul className="list-disc list-inside">
                    <li>Must provide detailed project information</li>
                    <li>Set realistic funding goals and deadlines</li>
                    <li>Receive funds only after reaching funding goal</li>
                    <li>Regular progress updates required</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="font-semibold text-[#a9ff1c] mb-2">For Investors:</p>
                  <ul className="list-disc list-inside">
                    <li>Secure investment tracking</li>
                    <li>Automatic refunds if goals aren't met</li>
                    <li>Transparent project milestones</li>
                    <li>Direct communication with creators</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="bg-[#a9ff1c]/10 border border-[#a9ff1c] rounded-lg p-6 mt-8">
              <p className="text-[#a9ff1c] font-semibold">Contract Details</p>
              <p className="text-sm mt-2">Platform Contract: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
              <p className="text-sm mt-1">Network: Ethereum Mainnet</p>
              <p className="text-sm mt-1">Platform Version: 1.0.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractPage;