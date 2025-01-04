import React from 'react';
import { Flame, Shield, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-dark-800">About CrowdChain</h1>
        <p className="mt-4 text-xl text-gray-600">
          Empowering creators and investors through blockchain technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-6">
          <Flame className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-white-800 mb-2">Our Mission</h2>
          <p className="text-white-600">
            To democratize project funding by connecting innovative creators with passionate investors
            through secure blockchain technology.
          </p>
        </div>

        <div className="card p-6">
          <Shield className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-white-800 mb-2">Security First</h2>
          <p className="text-white-600">
            Built on Polygon's secure blockchain infrastructure, ensuring transparent and safe
            transactions for all users.
          </p>
        </div>

        <div className="card p-6">
          <Zap className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-white-800 mb-2">Innovation</h2>
          <p className="text-white-600">
            Leveraging cutting-edge technology to provide a seamless and efficient funding platform
            for the next generation of creators.
          </p>
        </div>

        <div className="card p-6">
          <Globe className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-white-800 mb-2">Global Community</h2>
          <p className="text-white-600">
            Connecting creators and investors worldwide, fostering a diverse ecosystem of innovation
            and collaboration.
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default About;