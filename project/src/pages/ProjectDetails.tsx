// src/pages/ProjectDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ArrowLeft, Mail, Phone, Calendar } from 'lucide-react';
import FundingModal from '../components/FundingModal';

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useStore((state) => 
    state.projects.find((p) => p.id === id)
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [fundAmount, setFundAmount] = useState(0);

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-600">Project not found</h2>
        <button 
          onClick={() => navigate('/dashboard')}
          className="btn-primary mt-4"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </button>
      </div>
    );
  }

  const fundingGoal = project.fundingGoal ?? 0; // Default to 0 if undefined

  const handleFund = () => {
    const updatedProject = {
      ...project,
      currentFunding: project.currentFunding + fundAmount,
    };

    if (updatedProject.currentFunding >= fundingGoal) {
      alert('Funding goal reached!');
      // Logic to remove project from the state
    }

    useStore.getState().updateProject(updatedProject);
    setModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/dashboard')}
        className="btn-primary mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Dashboard</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
          
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              {project.creatorEmail}
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              {project.contactNumber}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(project.createdAt).toLocaleDateString()}
            </div>
          </div>

          <p className="mt-6 text-gray-600 whitespace-pre-wrap">
            {project.description}
          </p>

          <div className="mt-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{
                  width: `${(project.currentFunding / fundingGoal) * 100}%`,
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <div>
                <p className="text-2xl font-bold text-gray-800">
                  {project.currentFunding} LC
                </p>
                <p className="text-sm text-gray-600">raised of {fundingGoal} LC goal</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">
                  {((project.currentFunding / fundingGoal) * 100).toFixed(1)}%
                </p>
                <p className="text-sm text-gray-600">funded</p>
              </div>
            </div>
          </div>

          <button 
            className="btn-primary w-full mt-4"
            onClick={() => setModalOpen(true)} // Open funding modal
          >
            Invest in Project
          </button>
        </div>
      </div>

      <FundingModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onFund={handleFund} 
        setFundAmount={setFundAmount} // Pass the setter for fund amount
      />
    </div>
  );
};

export default ProjectDetails;
