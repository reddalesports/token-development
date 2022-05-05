// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";
const hre = require("hardhat");
import { getImplementationAddress } from '@openzeppelin/upgrades-core';

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

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Reddal = await ethers.getContractFactory("Reddal");
  const reddalToken = await upgrades.deployProxy(Reddal, [],{ kind: "uups" });
  await reddalToken.deployed();

  // upgrade to "latest" ?
  const implementationToken = await upgrades.upgradeProxy(reddalToken.address, Reddal)
  // await implementationToken.deployed()

  const ReddalCrowdSale = await ethers.getContractFactory("ReddalCrowdsale");
  const reddalCrowdsale = await ReddalCrowdSale.deploy(
    1000,
    beneficiary,
    reddalToken.address,
    updater,
    1
  );
  await reddalCrowdsale.deployed();

  //Transfer funds from Token to crowdsale
  console.log("Crowdsale address:", reddalCrowdsale.address);

  console.log("Before Transfer: crowdsale REDDAL balance: ", ethers.utils.formatEther(await reddalToken.balanceOf(reddalCrowdsale.address)))
  console.log("Before Transfer: deployer REDDAL balance: ", ethers.utils.formatEther(await reddalToken.balanceOf(deployer.address)))
  let result = await reddalToken.transfer(reddalCrowdsale.address, await reddalToken.totalSupply())
  console.log("After: crowdsale REDDAL balance: ", ethers.utils.formatEther(await reddalToken.balanceOf(reddalCrowdsale.address)))
  console.log("After: deployer REDDAL balance: ", ethers.utils.formatEther(await reddalToken.balanceOf(deployer.address)))

  console.log("Reddal Proxy deployed to:", reddalToken.address);
  console.log("ReddalCrowdsale deployed to:", reddalCrowdsale.address);
  console.log("Reddal Token Implementation deployed to:", await upgrades.erc1967.getImplementationAddress(reddalToken.address))
  console.log("Reddal Token Implementation deployed to [NEW]:", await getImplementationAddress(ethers.provider, reddalToken.address))
  console.log("Implementation Token Address: ", implementationToken.address)

  // await hre.run("verify:verify", {
  //   address: await upgrades.erc1967.getImplementationAddress(reddalToken.address),
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
