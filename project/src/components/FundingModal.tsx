import React, { FC } from 'react';
import { Modal } from 'antd';

interface FundingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFund: () => void;
  setFundAmount: (amount: number) => void;
}

const FundingModal: FC<FundingModalProps> = ({ isOpen, onClose, onFund, setFundAmount }) => {
  const handleFundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFundAmount(Number(e.target.value));
  };

  return (
    <Modal
      title="Fund Project"
      visible={isOpen}
      onCancel={onClose}
      onOk={onFund}
    >
      <input 
        type="number" 
        placeholder="Enter amount to fund" 
        onChange={handleFundChange} 
      />
    </Modal>
  );
};

export default FundingModal;
