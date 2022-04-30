const { ethers, waffle} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    // console.log(await ethers.getSigners())
    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await ethers.getContractFactory("Reddal");
    const token = await Token.deploy();

    console.log("Token address:", token.address);

    // We also save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(token, "Reddal");

    beneficiary = deployer.address
    updater = deployer.address
    const CrowdSale = await ethers.getContractFactory("ReddalCrowdsale");
    const crowdsale = await CrowdSale.deploy(1000, beneficiary, token.address, updater, 1);

    //Transfer funds from Token to crowdsale
    console.log("Crowdsale address:", crowdsale.address);

    console.log("crowdsale REDDAL balance: ", ethers.utils.formatEther(await token.balanceOf(crowdsale.address)))
    console.log("deployer REDDAL balance: ", ethers.utils.formatEther(await token.balanceOf(deployer.address)))
    let result = await token.transfer(crowdsale.address, await token.totalSupply())

    const provider = waffle.provider;

    console.log("transfer Reddal from deployer to Crowdsale", result)
    console.log("crowdsale REDDAL balance: ", ethers.utils.formatEther(await token.balanceOf(crowdsale.address)))
    console.log("deployer REDDAL balance: ", ethers.utils.formatEther(await token.balanceOf(deployer.address)))
    console.log("deployer eth balance: ",  ethers.utils.formatEther(await provider.getBalance(deployer.address)))


    // Do some tests and send eth to the crowdsale address
    // let send = await deployer.sendTransaction({
    //     to: crowdsale.address,
    //     value: ethers.utils.parseEther("10"), // Sends exactly 1.0 ether
    // });
    //
    // console.log("transaction send: ", send)
    // console.log("crowdsale balance: ", await token.balanceOf(crowdsale.address))
    // console.log("deployer balance: ", await token.balanceOf(deployer.address))
    // console.log("deployer eth balance: ",  ethers.utils.formatEther(await provider.getBalance(deployer.address)))


    // const balance0ETH = await provider.getBalance(deployer.address);

    // We also save the contract's artifacts and address in the frontend directory
    saveFrontendFiles(crowdsale, "ReddalCrowdsale");
}

function saveFrontendFiles(contract, contractName) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../hardhat-artifacts";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + "/contract-address.json",
        JSON.stringify({ Contract: contract.address }, undefined, 2)
    );

    const ContractArtifact = artifacts.readArtifactSync(contractName);

    fs.writeFileSync(
        contractsDir + "/Token.json",
        JSON.stringify(ContractArtifact, null, 2)
    );

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });