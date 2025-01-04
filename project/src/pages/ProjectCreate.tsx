import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Upload, Send } from 'lucide-react';

const ProjectCreate: React.FC = () => {
  const navigate = useNavigate();
  const addProject = useStore((state) => state.addProject);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    creatorEmail: '',
    contactNumber: '',
    fundingGoal: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting project with data:', formData); // Log form data
    const newProject = {
      ...formData,
      id: crypto.randomUUID(),
      currentFunding: 0,
      createdAt: new Date(),
      creator: useStore.getState().user!,
    };
    
    addProject(newProject);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Project</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="input-field"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Project Image URL
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              id="imageUrl"
              className="input-field"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              required
            />
            <button type="button" className="btn-primary">
              <Upload className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={formData.creatorEmail}
              onChange={(e) => setFormData({ ...formData, creatorEmail: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              className="input-field"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="fundingGoal" className="block text-sm font-medium text-gray-700 mb-1">
            Funding Goal (LC)
          </label>
          <input
            type="number"
            id="fundingGoal"
            min="0"
            step="0.01"
            className="input-field"
            value={formData.fundingGoal}
            onChange={(e) => setFormData({ ...formData, fundingGoal: parseFloat(e.target.value) })}
            required
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          <Send className="h-5 w-5" />
          <span>Create Project</span>
        </button>
      </form>
    </div>
  );
};

export default ProjectCreate;
