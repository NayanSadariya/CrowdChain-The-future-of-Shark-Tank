import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PLATFORM_FEE } from '../utils/constants';

interface ProjectFormProps {
  onClose: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would interact with the smart contract to create the project
    // For now, we'll just close the form
    onClose();
  };

  const calculatePlatformFee = (amount: string) => {
    const value = parseFloat(amount) || 0;
    return (value * PLATFORM_FEE).toFixed(4);
  };

  return (
    <div className="bg-black/30 border border-[#a9ff1c]/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Create New Project</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#a9ff1c] mb-2">Project Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-black/30 border border-[#a9ff1c]/30 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-[#a9ff1c]"
            required
          />
        </div>

        <div>
          <label className="block text-[#a9ff1c] mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-black/30 border border-[#a9ff1c]/30 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-[#a9ff1c] h-32"
            required
          />
        </div>

        <div>
          <label className="block text-[#a9ff1c] mb-2">Target Amount (ETH)</label>
          <input
            type="number"
            step="0.01"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="w-full bg-black/30 border border-[#a9ff1c]/30 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-[#a9ff1c]"
            required
          />
          <p className="text-sm text-gray-400 mt-1">
            Platform fee: {calculatePlatformFee(targetAmount)} ETH
          </p>
        </div>

        <div>
          <label className="block text-[#a9ff1c] mb-2">Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full bg-black/30 border border-[#a9ff1c]/30 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-[#a9ff1c]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#a9ff1c] hover:bg-[#98e619] text-black font-bold py-3 px-4 rounded-lg transition duration-200"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;