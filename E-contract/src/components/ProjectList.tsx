import React from 'react';
import { Clock, Target } from 'lucide-react';

const ProjectList = () => {
  // Mock data - in production, this would come from the blockchain
  const projects = [
    {
      id: '1',
      title: 'Innovative Tech Startup',
      description: 'Building the next generation of blockchain solutions',
      targetAmount: 50,
      raisedAmount: 30,
      deadline: new Date('2024-12-31'),
      creator: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-white">Active Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(project => (
          <div key={project.id} className="bg-black/30 border border-[#a9ff1c]/20 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
            <p className="text-gray-400 mb-4">{project.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#a9ff1c]">
                  <Target size={16} className="mr-2" />
                  <span>Target</span>
                </div>
                <span className="text-white">{project.targetAmount} ETH</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#a9ff1c]">
                  <Clock size={16} className="mr-2" />
                  <span>Deadline</span>
                </div>
                <span className="text-white">
                  {project.deadline.toLocaleDateString()}
                </span>
              </div>

              <div className="mt-4">
                <div className="w-full bg-black/50 rounded-full h-2">
                  <div 
                    className="bg-[#a9ff1c] h-2 rounded-full"
                    style={{ width: `${(project.raisedAmount / project.targetAmount) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-[#a9ff1c]">
                    {((project.raisedAmount / project.targetAmount) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#a9ff1c] hover:bg-[#98e619] text-black font-bold py-2 px-4 rounded-lg transition duration-200 mt-4">
                Invest Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;