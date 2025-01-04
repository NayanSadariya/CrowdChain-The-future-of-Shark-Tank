export const AUTH_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "_passwordHash",
        "type": "bytes32"
      }
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "_passwordHash",
        "type": "bytes32"
      }
    ],
    "name": "login",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];