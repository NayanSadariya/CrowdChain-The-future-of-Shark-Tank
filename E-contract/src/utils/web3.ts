import Web3 from 'web3';
import { AUTH_CONTRACT_ABI } from '../contracts/AuthContract';

export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      return web3;
    } catch (error) {
      throw new Error('Failed to connect to wallet');
    }
  } else {
    throw new Error('Please install MetaMask');
  }
};

export const hashPassword = (password: string) => {
  const web3 = new Web3();
  return web3.utils.sha3(password) as string;
};