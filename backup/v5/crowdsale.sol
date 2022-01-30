// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";

// contract ReddalCrowdsale is Crowdsale, MintedCrowdsale {
//     constructor(
//         uint256 rate,    // rate in TKNbits
//         address payable wallet,
//         IERC20 token
//     )
//         MintedCrowdsale()
//         Crowdsale(rate, wallet, token)
//         public
//     {

//     }
// }

// contract MyCrowdsaleDeployer {
//     constructor()
//         public
//     {
//         // create a mintable token
//         ERC20Mintable token = new MyToken();

//         // create the crowdsale and tell it about the token
//         Crowdsale crowdsale = new MyCrowdsale(
//             1,               // rate, still in TKNbits
//             msg.sender,      // send Ether to the deployer
//             token            // the token
//         );
//         // transfer the minter role from this contract (the default)
//         // to the crowdsale, so it can mint tokens
//         token.addMinter(address(crowdsale));
//         token.renounceMinter();
//     }
// }