import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Search, Filter, Coins, TrendingUp, History } from 'lucide-react';
import {Link} from 'react-router-dom';

const Dashboard: React.FC = () => {
  const projects = useStore((state) => state.projects);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-dark-900">Dashboard</h1>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-300" />
            <input
              type="text"
              placeholder="Search projects..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button className="btn-primary">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Coins className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-light-100">Your Investors</h2>
          </div>
          <p className="text-3xl font-bold text-primary">

          </p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-light-100">Total Companies</h2>
          </div>
          <p className="text-3xl font-bold text-primary">
            
          </p>
        </div>

        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <History className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-light-100">Your Contracts</h2>
          </div>
          <p className="text-3xl font-bold text-primary">
            
          </p>
        </div>
      </div>

      {/* <div className="card p-6">
        <h2 className="text-xl font-semibold text-light-100 mb-4">Recent Transactions</h2>
        {transactions.length === 0 ? (
          <p className="text-light-300">No transactions yet</p>
        ) : (
          <div className="space-y-4">
            {transactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} 
                className="flex justify-between items-center p-4 bg-dark-800 rounded-lg"
              >
                <div>
                  <p className="font-medium text-light-100">{transaction.type}</p>
                  <p className="text-sm text-light-300">
                    {new Date(transaction.timestamp).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.type === 'DEPOSIT' ? 'text-primary' : 'text-red-500'
                  }`}>
                    {transaction.type === 'DEPOSIT' ? '+' : '-'}{transaction.amount} LC
                  </p>
                  <p className="text-sm text-light-300">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}

      <div className="card p-6">
        <h2 className="text-xl font-semibold text-light-100 mb-4">Active Projects</h2>
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-light-100">No projects yet</h2>
            <p className="text-light-300 mt-2">Be the first to create a project!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="card bg-dark-800">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-light-100">{project.name}</h3>
                  <p className="text-light-300 mt-2 line-clamp-2">{project.description}</p>
                  
                  <div className="mt-4">
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(project.currentFunding / project.fundingGoal) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-light-300">
                      <span>{project.currentFunding} LC raised</span>
                      <span>{project.fundingGoal} LC goal</span>
                    </div>
                  </div>
                  
                  <Link to="http://localhost:5173/" className="btn-primary w-full mt-4">Invest</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;