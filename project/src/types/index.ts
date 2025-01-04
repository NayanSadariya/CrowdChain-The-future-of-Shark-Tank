export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  creatorEmail: string;
  contactNumber: string;
  fundingGoal: number;
  currentFunding: number;
  createdAt: Date;
  creator: User;
}

export interface User {
  id: string;
  address: string;
  email: string;
  role: 'CREATOR' | 'INVESTOR' | 'ADMIN';
  balance: number;
  projects?: Project[];
  investments?: Investment[];
}

export interface Investment {
  id: string;
  amount: number;
  projectId: string;
  investorId: string;
  timestamp: Date;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export interface Transaction {
  id: string;
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'INVESTMENT';
  amount: number;
  userId: string;
  projectId?: string;
  timestamp: Date;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  projectCategory: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}