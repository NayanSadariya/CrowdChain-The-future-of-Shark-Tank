export interface Project {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  raisedAmount: number;
  creatorAddress: string;
  deadline: Date;
}

export interface Investment {
  projectId: string;
  investorAddress: string;
  amount: number;
  timestamp: Date;
}