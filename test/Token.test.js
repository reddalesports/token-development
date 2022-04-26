// test/Token.test.js
// SPDX-License-Identifier: MIT

// Based on https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v2.5.1/test/examples/SimpleToken.test.js

const { ethers, upgrades } = require("hardhat");
const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');

// // Load compiled artifacts
// const REDDAL = artifacts.require('Reddal');

// Start test block
contract('Reddal', function ([ creator, other ]) {

    const NAME = 'Reddal';
    const SYMBOL = 'REDDAL';
    const TOTAL_SUPPLY = new BN('10000000000000000000000');

    beforeEach(async function () {
        const Token = await ethers.getContractFactory("Reddal");
        this.token = await upgrades.deployProxy(Token, {kind: 'uups'});
    });

    it('has a total supply', async function () {
        // Use large integer comparisons
        console.debug(await this.token.totalSupply())
        expect(await this.token.totalSupply()).to.be.equal(TOTAL_SUPPLY.toString());
    });

    it('has a name', async function () {
        expect(await this.token.name()).to.be.equal(NAME);
    });

    it('has a symbol', async function () {
        expect(await this.token.symbol()).to.be.equal(SYMBOL);
    });

    it('assigns the initial total supply to the creator', async function () {
        // console.debug(await this.token.balanceOf(creator).value())
        expect(await this.token.balanceOf(creator)).to.be.equal(TOTAL_SUPPLY.toString())
        // expect(await this.token.balanceOf(creator)).to.be.bignumber.equal(TOTAL_SUPPLY.toString());
    });
});