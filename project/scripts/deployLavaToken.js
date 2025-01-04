import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const LavaToken = await ethers.getContractFactory("LavaToken");
  const lavaToken = await LavaToken.deploy();
  console.log("LavaToken contract deployed to:", lavaToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
