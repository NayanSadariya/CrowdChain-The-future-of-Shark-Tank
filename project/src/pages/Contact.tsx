import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="card p-6">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-bold text-white-800 mb-2">Email Us</h2>
            <p className="text-white-600">
              support@lavacoins.com
            </p>
          </div>

          <div className="card p-6">
            <MessageSquare className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-bold text-white-800 mb-2">Live Chat</h2>
            <p className="text-white-600">
              Available Monday to Friday<br />
              9:00 AM - 5:00 PM EST
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white-700 mb-1">
              Your Name
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
            <label htmlFor="email" className="block text-sm font-medium text-white-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="input-field"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="input-field"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;