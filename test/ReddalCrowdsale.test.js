// test/ReddalCrowdsale.test.js
// SPDX-License-Identifier: MIT

// Based on https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v2.5.1/test/examples/SimpleToken.test.js

const { expect } = require('chai');

// Import utilities from Test Helpers
const { BN, ether, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const REDDAL = artifacts.require('Reddal');
const ReddalCrowdsale = artifacts.require('ReddalCrowdsale');

// Start test block
contract('ReddalCrowdsale', function ([ creator, investor, wallet ]) {

    const NAME = 'REDDAL';
    const SYMBOL = 'SIM';
    const TOTAL_SUPPLY = new BN('10000000000000000000000');
    const RATE = new BN(10);

    beforeEach(async function () {
        this.token = await REDDAL.new();
        this.crowdsale = await ReddalCrowdsale.new(RATE, wallet, this.token.address, creator, 1);
        this.token.transfer(this.crowdsale.address, await this.token.totalSupply());
    });

    it('should create crowdsale with correct parameters', async function () {
        expect(await this.crowdsale.rate()).to.be.bignumber.equal(RATE);
        expect(await this.crowdsale.wallet()).to.be.equal(wallet);
        expect(await this.crowdsale.token()).to.be.equal(this.token.address);
    });

    it('should accept payments', async function () {
        const investmentAmount = ether('1');
        const expectedTokenAmount = RATE.mul(investmentAmount);

        await this.crowdsale.buyTokens(investor, { value: investmentAmount, from: investor });

        expect(await this.token.balanceOf(investor)).to.be.bignumber.equal(expectedTokenAmount);
    });

    it('should be pausable', async function () {
        await this.crowdsale.pauseICO()

        expect(await this.crowdsale.paused()).to.be.equal(true);
    });

    it('should be resumable', async function () {
        await this.crowdsale.pauseICO()
        expect(await this.crowdsale.paused()).to.be.equal(true);

        await this.crowdsale.unpauseICO()
        expect(await this.crowdsale.paused()).to.be.equal(false);

    });

    it('should use new ETHUSD rate', async function () {
        value = new BN('42000000000000000000');
        await this.crowdsale.updateETHUSDRate( new BN('42'))
        expect(await this.crowdsale.ethusdRate()).to.be.bignumber.equal(new BN('42'));
        expect(await this.crowdsale.rate()).to.be.bignumber.equal(value);
    });
});