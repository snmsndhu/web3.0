const hre = require("hardhat");
async function main() {
  const Transactions = await hre.ethers.deployContract("Transactions");

  const transactions = await Transactions.waitForDeployment();

  await transactions.deployed();

  console.log("Transaction deployed to:", transactions.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
