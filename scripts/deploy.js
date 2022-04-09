const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("GameItem");

  //deploy contract
  const deployedNFTContract = await nftContract.deploy();

  await deployedNFTContract.deployed();

  //print contract address
  //This is the address, I need it for later: 0x2FBac1BC09F68bb3bc063551Ba2085496252200b
  console.log("NFT Contract Address: ", deployedNFTContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
