// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  // GET THE CONTRACT DEPLOYER
  const [deployer] = await ethers.getSigners();
  const { address } = deployer;
  const beneficiary = address;
  const updater = address;

  const Reddal = await ethers.getContractFactory("Reddal");
  const reddalToken = await upgrades.deployProxy(Reddal, { kind: "uups" });

  const ReddalCrowdSale = await ethers.getContractFactory("ReddalCrowdsale");
  const reddalCrowdsale = await ReddalCrowdSale.deploy(
    1000,
    beneficiary,
    reddalToken.address,
    updater,
    1
  );

  await reddalToken.deployed();
  await reddalCrowdsale.deployed();

  console.log("Reddal Proxy deployed to:", reddalToken.address);
  console.log("ReddalCrowdsale deployed to:", reddalCrowdsale.address);
  console.log("Reddal Token Implementation deployed to:", await upgrades.erc1967.getImplementationAddress(reddalToken.address))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
