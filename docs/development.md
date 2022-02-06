

# Deploying token to test net

```npx truffle deploy --network ropsten```

```
2_deploy.js
===========

   Deploying 'SimpleToken'
   -----------------------
   > transaction hash:    0xe1afa7e1f9eb503a27ac2475a0f13c66ca5834ff63c8c3fedf766ea9e34c8bf1
   > Blocks: 0            Seconds: 12
   > contract address:    0x1686FD01604fBf948a547ca4a66Bc867f6Aa31F0
   > block number:        11927272
   > block timestamp:     1644159512
   > account:             0xEB5367a1f6861E012cd623b6A86FcCb43e5F816E
   > balance:             1.47282054
   > gas used:            1119992 (0x1116f8)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02239984 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 11927273)
   > confirmation number: 2 (block: 11927274)

   Deploying 'SimpleCrowdsale'
   ---------------------------
   > transaction hash:    0x95e1ad8024c273b95c05e51f87f3def9208139dd451152112aae8da94a831414
   > Blocks: 0            Seconds: 8
   > contract address:    0x996D47bbB6B574d02afEFDb6Af74cb5C6a7c18e7
   > block number:        11927275
   > block timestamp:     1644159623
   > account:             0xEB5367a1f6861E012cd623b6A86FcCb43e5F816E
   > balance:             1.45844428
   > gas used:            718813 (0xaf7dd)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01437626 ETH
   
   ...
   Final cost:          0.04064096 ETH
   ```

Ropsten test network:

```truffle console --network ropsten```

Access to the deployed contracts instance via: 
`SimpleCrowdsale.deployed().then(function(instance){return instance });`

`SimpleToken.deployed().then(function(instance){return instance });`
