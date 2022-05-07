import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const { deploy, log, get } = deployments

    const {deployer} = await getNamedAccounts();
    const reddalToken = await get("Reddal")

    await deploy('ReddalCrowdsale', {
        contract: "ReddalCrowdsale",
        from: deployer,
        args: [ 1000, deployer, reddalToken.address, deployer, 1],
        log: true,
    });
};

export default func;
func.tags = ['ReddalCrowdsale'];