import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;

    const {deployer} = await getNamedAccounts();

    await deploy('Reddal', {
        contract: "Reddal",
        from: deployer,
        args: [],
        proxy: {
            proxyContract: 'ERC1967Proxy',
            proxyArgs: ['{implementation}', '{data}'],
            execute: { init: { methodName: 'initialize', args: [], }, }
        },
        log: true,
    });
};

export default func;
func.tags = ['Reddal', 'token'];


