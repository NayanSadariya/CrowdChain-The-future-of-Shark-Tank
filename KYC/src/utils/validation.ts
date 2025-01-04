export const validateAadharNumber = (aadharNumber: string): boolean => {
  // Remove spaces and check if it's exactly 12 digits
  const cleanNumber = aadharNumber.replace(/\s/g, '');
  return /^\d{12}$/.test(cleanNumber);
};

export const formatAadharNumber = (input: string): string => {
  const cleanNumber = input.replace(/\s/g, '');
  return cleanNumber.replace(/(\d{4})/g, '$1 ').trim();
};

export const verifyAadharNumber = (input: string): boolean => {
  const validAadhar = '931361876822';
  const cleanInput = input.replace(/\s/g, '');
  return cleanInput === validAadhar;
};