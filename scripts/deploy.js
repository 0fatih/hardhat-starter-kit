const hre = require("hardhat");

async function main() {
  let YOUR_CONTRACT_NAME = "YourContract"

  const ContractForDeployment = await hre.ethers.getContractFactory(YOUR_CONTRACT_NAME);
  const contractForDeployment = await ContractForDeployment.deploy("Hello, Hardhat!");

  await contractForDeployment.deployed();

  console.log("Your contract deployed to:", contractForDeployment.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
