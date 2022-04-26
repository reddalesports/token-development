/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");
require('solidity-coverage')
require('@openzeppelin/hardhat-upgrades');

require('dotenv').config()  // Store environment-specific variable from '.env' to process.env



// kovan: {
//   provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
//       network_id: 42,       // kovan's id
//       gas: 5500000,        //
//       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
// },


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {

  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: `${process.env.MNENOMIC}`,
      }
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: `${process.env.MNENOMIC}`,
      }
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.5.5",
      },
      {
        version: "0.8.4",
        settings: {},
      },
    ],
  },
};