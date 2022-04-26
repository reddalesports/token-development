# token-development

# Setup guide:

## Setup dependencies

run `npm install`

## Development
In order to deploy to a local network we can do the following:

`npx hardhat run scripts/deploy.js --network localhost`

Save the address of the contracts from the result of the deployment above

```solidity
Token address: 0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB
Crowdsale address: 0x3155755b79aA083bd953911C92705B7aA82a18F9
```

in order to run the console we can:
`npx hardhat console --network localhost`

```solidity
const Token  = await ethers.getContractFactory('Reddal');
const reddal = await Token.attach('0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB')
```

```solidity
> await reddal.name()
'Reddal' 
```

```solidity
> await reddal.totalSupply()
BigNumber { value: "10000000000000000000000" }
```

## Tests

run `npx hardhat test`

To run the test with coverage:
`npx hardhat coverage`


```
  Contract: ReddalCrowdsale
    ✔ should create crowdsale with correct parameters
    ✔ should accept payments
    ✔ should be pausable
    ✔ should be resumable
    ✔ should use new ETHUSD rate

  Contract: Reddal
    ✔ has a total supply
    ✔ has a name
    ✔ has a symbol
    ✔ assigns the initial total supply to the creator


  9 passing (350ms)

----------------------|----------|----------|----------|----------|----------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------------------|----------|----------|----------|----------|----------------|
 contracts/           |    55.56 |       50 |    76.92 |    63.16 |                |
  ReddalCrowdsale.sol |    64.29 |       50 |      100 |    73.33 |    37,78,79,80 |
  Token.sol           |       25 |      100 |       25 |       25 |       14,18,26 |
----------------------|----------|----------|----------|----------|----------------|
All files             |    55.56 |       50 |    76.92 |    63.16 |                |
----------------------|----------|----------|----------|----------|----------------|

```