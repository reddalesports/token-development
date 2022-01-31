# token-development
Token development repository

SimpleToken and SimpleCrowdsale follow the guide in: https://forum.openzeppelin.com/t/simple-erc20-crowdsale/4863

# Setup guide:

## Setup dependencies

run `npm install`

## Development
Run `npx truffle develop`
it yields:

```$ npx truffle develop
Truffle Develop started at http://127.0.0.1:9545/
...
truffle(develop)>
```

We can now start using the development network, to do so we need to
`migrate` to compile and deploy the contracts to the local development
network
After that we can start interacting with the `token`, `crowdsale`, and
`network`
```
truffle(develop)> migrate
Compiling your contracts...
===========================
...
Starting migrations...
======================
> Network name:    'develop'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
...
2_deploy.js
===========

   Deploying 'SimpleToken'
...
   Deploying 'SimpleCrowdsale'
...
truffle(develop)> token = await SimpleToken.deployed()
undefined
truffle(develop)> crowdsale = await SimpleCrowdsale.deployed()
undefined
truffle(develop)> (await token.balanceOf(crowdsale.address)).toString()
'10000000000000000000000'
truffle(develop)> (await token.totalSupply()).toString()
'10000000000000000000000'
```

## Tests

run `npx ganache-cli --deterministic`
in a different terminal `npx truffle test`

To run the test coverage:
`npx truffle run coverage`

```solidity
  6 passing (632ms)

----------------------|----------|----------|----------|----------|----------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------------------|----------|----------|----------|----------|----------------|
 contracts/           |      100 |      100 |      100 |      100 |                |
  SimpleCrowdsale.sol |      100 |      100 |      100 |      100 |                |
  SimpleToken.sol     |      100 |      100 |      100 |      100 |                |
----------------------|----------|----------|----------|----------|----------------|
All files             |      100 |      100 |      100 |      100 |                |
----------------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json
> solidity-coverage cleaning up, shutting down ganache server
```

# CrowdSale

## Documentation
https://docs.openzeppelin.com/contracts/2.x/crowdsales 

## Example code

https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.1/contracts/examples/SampleCrowdsale.sol

# Truffle configuration

## Multiple solc versions
https://ethereum.stackexchange.com/questions/73662/using-two-solc-versions-within-the-same-truffle-project
