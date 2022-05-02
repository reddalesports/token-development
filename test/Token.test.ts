// test/Token.test.js
// SPDX-License-Identifier: MIT

// Based on https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v2.5.1/test/examples/SimpleToken.test.js

import hre, { ethers, upgrades } from "hardhat";
import { expect } from "chai";

// Import utilities from Test Helpers
const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');


describe("Deploying Reddal Proxy Contract / Upgradeable Contract", function () {
    const NAME = 'Reddal';
    const SYMBOL = 'REDDAL';
    const TOTAL_SUPPLY = new BN('10000000000000000000000');

    beforeEach(async function () {
        const Token = await ethers.getContractFactory("Reddal");
        this.token = await upgrades.deployProxy(Token, {kind: 'uups'});
    });

    it('has a total supply', async function () {
        expect(await this.token.totalSupply()).to.be.equal(TOTAL_SUPPLY.toString());
    });

    it('has a name', async function () {
        expect(await this.token.name()).to.be.equal(NAME);
    });

    it('has a symbol', async function () {
        expect(await this.token.symbol()).to.be.equal(SYMBOL);
    });

    it('assigns the initial total supply to the creator', async function () {
        const [owner] = await ethers.getSigners();
        expect(await this.token.balanceOf(owner.address)).to.be.equal(TOTAL_SUPPLY.toString())
    });

    // it("Should return the new Reddal Proxy Contract Name", async function () {
    //     const Reddal = await hre.ethers.getContractFactory("Reddal");
    //     const reddalToken = await hre.upgrades.deployProxy(Reddal);
    //     await reddalToken.deployed();
    //     expect(await reddalToken.name()).to.be.equal("Reddal");
    // });
});
