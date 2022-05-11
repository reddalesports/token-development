import hre, { ethers, upgrades } from "hardhat";
import {assert, expect} from "chai";

// Import utilities from Test Helpers
const { BN, ether, expectEvent, expectRevert, constants } = require('@openzeppelin/test-helpers');


describe("Deploying Reddal Crowdsale", function () {
    const NAME = 'REDDAL';
    const SYMBOL = 'SIM';
    const TOTAL_SUPPLY = ethers.BigNumber.from('10000000000000000000000');
    const RATE = ethers.BigNumber.from(10);

    beforeEach(async function () {
        const Token = await ethers.getContractFactory("Reddal");
        this.token = await upgrades.deployProxy(Token, {kind: "uups"});
        const [beneficiary, updater] = await ethers.getSigners();
        const ReddalCrowdsale = await ethers.getContractFactory("ReddalCrowdsale");
        this.crowdsale = await ReddalCrowdsale.deploy(10, beneficiary.address, this.token.address, updater.address, 1000, beneficiary.address, beneficiary.address);
        this.token.transfer(this.crowdsale.address, await this.token.totalSupply());
    });

    it('should create crowdsale with correct parameters', async function () {
        const [beneficiary, updater] = await ethers.getSigners();

        expect(await this.crowdsale.rate()).to.be.equal(RATE);
        expect(await this.crowdsale.wallet()).to.be.equal(beneficiary.address);
        expect(await this.crowdsale.token()).to.be.equal(this.token.address);
    });

    it('should accept payments', async function () {
        const [beneficiary, updater, investor] = await ethers.getSigners();

        const investmentAmount = ethers.utils.parseEther('1000.0');
        const expectedTokenAmount = RATE.mul(investmentAmount);

        await this.crowdsale.connect(investor);

        await this.crowdsale.buyTokens(investor.address, { value: investmentAmount});

        expect(await this.token.balanceOf(investor.address)).to.be.equal(expectedTokenAmount.toString());
    });

    it('should use new ETHUSD rate', async function () {
        const [beneficiary, updater, investor] = await ethers.getSigners();
        let value = ethers.BigNumber.from('42000');
        await this.crowdsale.connect(updater).updateETHUSDRate( ethers.BigNumber.from('42'))

        expect(await this.crowdsale.ethusdRate()).to.be.equal( ethers.BigNumber.from('42'));
        expect(await this.crowdsale.rate()).to.be.equal(value);
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

    it('should be upgradable', async function(){

        const TokenV2 = await ethers.getContractFactory("ReddalV2");
        this.tokenV2 = await upgrades.deployProxy(TokenV2, []);

        assert(await this.tokenV2.version() === "v2!");
        this.tokenUpgraded = await upgrades.upgradeProxy(this.token.address, TokenV2)
        assert(await this.tokenUpgraded.version() === "v2!");
    })

});