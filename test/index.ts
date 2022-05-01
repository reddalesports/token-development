import { expect } from "chai";
import hre from "hardhat";

describe("Deploying Reddal Proxy Contract / Upgradeable Contract", function () {
  it("Should return the new Reddal Proxy Contract Name", async function () {
    const Reddal = await hre.ethers.getContractFactory("Reddal");
    const reddalToken = await hre.upgrades.deployProxy(Reddal);
    await reddalToken.deployed();
    expect(await reddalToken.name()).to.be.equal("Reddal");
  });
});
