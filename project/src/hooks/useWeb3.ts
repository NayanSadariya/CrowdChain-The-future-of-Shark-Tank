import { useCallback } from 'react';
import { ethers } from 'ethers';
import { useStore } from '../store/useStore';
import LavaTokenABI from "../../artifacts/contracts/LavaToken.sol/LavaToken.json";

// You can type the ABI as 'any' or 'ethers.utils.Interface' directly
const CONTRACT_ADDRESS = '0x...'; // Replace with deployed contract address

export const useWeb3 = () => {
  const updateBalance = useStore((state) => state.updateBalance);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      throw new Error('Please install MetaMask to use this feature');
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  }, []);

  const buyTokens = useCallback(async (amount: number) => {
    try {
      const signer = await connectWallet();

      // Ensure proper typing of ABI
      const contract = new ethers.Contract(CONTRACT_ADDRESS, LavaTokenABI as any, signer);
      
      const maticAmount = ethers.parseEther((amount / 100).toString());
      const tx = await contract.buyTokens({ value: maticAmount });
      await tx.wait();

      const newBalance = await contract.balanceOf(await signer.getAddress());
      updateBalance(Number(ethers.formatEther(newBalance)));
    } catch (error) {
      console.error('Failed to buy tokens:', error);
      throw error;
    }
  }, [updateBalance]);

  const withdrawTokens = useCallback(async (amount: number) => {
    try {
      const signer = await connectWallet();

      // Ensure proper typing of ABI
      const contract = new ethers.Contract(CONTRACT_ADDRESS, LavaTokenABI as any, signer);
      
      const tx = await contract.withdraw(ethers.parseEther(amount.toString()));
      await tx.wait();

      const newBalance = await contract.balanceOf(await signer.getAddress());
      updateBalance(Number(ethers.formatEther(newBalance)));
    } catch (error) {
      console.error('Failed to withdraw tokens:', error);
      throw error;
    }
  }, [updateBalance]);

  return {
    connectWallet,
    buyTokens,
    withdrawTokens,
  };
};
