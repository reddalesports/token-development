# Crowdsale
Crowdsales have a bunch of different properties, but here are some important ones:
based on: https://docs.openzeppelin.com/contracts/2.x/crowdsales

* Price & Rate Configuration
  * Does our crowdsale sell tokens at a fixed price?
  * Does the price change over time or as a function of demand?
* Emission
  * How is this token actually sent to participants?
* Validation — Who is allowed to purchase tokens?
  * Are there KYC / AML checks?
  * Is there a max cap on tokens?
  * What if that cap is per-participant?
  * Is there a starting and ending time frame?
* Distribution
  * Does distribution of funds happen in real-time or after the crowdsale?
  * Can participants receive a refund if the goal is not met?


## Rate

All currency math is done in the smallest unit of that currency
and converted to the correct decimal places when displaying the currency.

In Ether, the smallest unit of the currency is wei, and `1 ETH === 10^18 wei`.
In tokens, the process is very similar: `1 TKN === 10^(decimals) TKNbits`.

The smallest unit of a token is "bits" or TKNbits.

The display value of a token is TKN, which is TKNbits * 10^(decimals)

Examples:
If we want to issue someone `"one token for every 2 wei"` and our decimals are 18, the rate is `0.5e18`. 

Then, when a user sends `2 wei`, the crowdsale issues the user `2 * 0.5e18 TKNbits`,
which is exactly equal to `10^18 TKNbits` and is displayed as `1 TKN`.

## Emission
One of the first decisions we have to make is "how do I get these tokens to users?".


This is usually done in one of three ways:

* (default) — The Crowdsale contract owns tokens and simply transfers tokens from its own ownership to users that purchase them.

* MintedCrowdsale — The Crowdsale mints tokens when a purchase is made.

* AllowanceCrowdsale — The Crowdsale is granted an allowance to another wallet (like a Multisig) that already owns the tokens to be sold in the crowdsale.

## Validation
There are different validation requirements that the crowdsale contract might have:

`CappedCrowdsale` — adds a cap to the crowdsale, invalidating any purchases that would exceed that cap

`IndividuallyCappedCrowdsale` — caps an individual’s contributions.

`WhitelistCrowdsale` — only allow whitelisted participants to purchase tokens. this is useful for putting the KYC / AML whitelist on-chain!

`TimedCrowdsale` — adds an openingTime and closingTime to the crowdsale

Example:
```solidity
contract MyCrowdsale is Crowdsale, CappedCrowdsale, TimedCrowdsale {

    constructor(
        uint256 rate,            // rate, in TKNbits
        address payable wallet,  // wallet to send Ether
        IERC20 token,            // the token
        uint256 cap,             // total cap, in wei
        uint256 openingTime,     // opening time in unix epoch seconds
        uint256 closingTime      // closing time in unix epoch seconds
    )
        CappedCrowdsale(cap)
        TimedCrowdsale(openingTime, closingTime)
        Crowdsale(rate, wallet, token)
        public
    {
        // nice, we just created a crowdsale that's only open
        // for a certain amount of time
        // and stops accepting contributions once it reaches `cap`
    }
}
```
## Distribution

Eventually the crowdsale must distribute the tokens.

There are a couple ways we can do that:
* (default) - Release the tokens as participants purchase them
* refundable - Refunds the tokens if we don’t hit a minimum raised in the sale
* PostDeliveryCrowdsale - Wait until after the sale is over before users can claim their tokens and start trading them

e.g Refundable:

```solidity
contract MyCrowdsale is Crowdsale, RefundableCrowdsale {

    constructor(
        uint256 rate,            // rate, in TKNbits
        address payable wallet,  // wallet to send Ether
        IERC20 token,            // the token
        uint256 goal             // the minimum goal, in wei
    )
        RefundableCrowdsale(goal)
        Crowdsale(rate, wallet, token)
        public
    {
        // nice! this crowdsale will, if it doesn't hit `goal`, allow everyone to get their money back
        // by calling claimRefund(...)
    }
}
```

e.g PostDeliveryCrowdsale:
```solidity
contract MyCrowdsale is Crowdsale, TimedCrowdsale, PostDeliveryCrowdsale {

    constructor(
        uint256 rate,            // rate, in TKNbits
        address payable wallet,  // wallet to send Ether
        IERC20 token,            // the token
        uint256 openingTime,     // opening time in unix epoch seconds
        uint256 closingTime      // closing time in unix epoch seconds
    )
        PostDeliveryCrowdsale()
        TimedCrowdsale(openingTime, closingTime)
        Crowdsale(rate, wallet, token)
        public
    {
        // nice! this Crowdsale will keep all of the tokens until the end of the crowdsale
        // and then users can `withdrawTokens()` to get the tokens they're owed
    }
}
```

