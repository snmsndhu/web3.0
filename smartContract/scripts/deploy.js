const main = async () => {
  const transactionsFactory = await hre.ethers.deployContract("Transactions");

  await transactionsFactory.waitForDeployment();

  console.log(`Transactions address: ", ${transactionsFactory.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
