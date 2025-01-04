// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract LavaToken is ERC20, Ownable, ReentrancyGuard {
    uint256 public constant TOKENS_PER_MATIC = 100;
    
    event TokensPurchased(address indexed buyer, uint256 amount);
    event TokensWithdrawn(address indexed user, uint256 amount);

    // Constructor that initializes ERC20 token with name and symbol,
    // and Ownable with no arguments.
    constructor() ERC20("LavaCoin", "LC") Ownable() {}

    // Function for users to buy tokens with MATIC
    function buyTokens() external payable nonReentrant {
        require(msg.value > 0, "Must send MATIC to buy tokens");
        
        uint256 tokenAmount = msg.value * TOKENS_PER_MATIC;
        _mint(msg.sender, tokenAmount);
        
        emit TokensPurchased(msg.sender, tokenAmount);
    }

    // Function for users to withdraw tokens in exchange for MATIC
    function withdraw(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        
        uint256 maticAmount = amount / TOKENS_PER_MATIC;
        require(address(this).balance >= maticAmount, "Insufficient contract balance");
        
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(maticAmount);
        
        emit TokensWithdrawn(msg.sender, amount);
    }

    // Getter function to know the current rate of tokens per MATIC
    function getTokensPerMatic() external pure returns (uint256) {
        return TOKENS_PER_MATIC;
    }
}
