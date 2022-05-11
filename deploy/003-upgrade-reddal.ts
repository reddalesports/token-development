import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const { deploy, log, get } = deployments

    const {deployer} = await getNamedAccounts();

    await deploy('ReddalUpgrade', {
        contract: 'ReddalV2',
        from: deployer,
        args: [],
        proxy: {
            proxyContract: 'ERC1967Proxy',
            proxyArgs: ['{implementation}', '{data}'],
        },
        log: true,
    });
};

export default func;
func.tags = ['ReddalTokenUpgrade'];