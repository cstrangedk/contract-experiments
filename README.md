# contract experiments

## to compile contracts

`truffle compile`

## to migrate contracts to Truffle developer testnet

1. `truffle develop`
2. `compile`
3. `migrate`

## to test contract

1. `truffle develop`
2. `test`

Should produce the following result:

```Using network 'develop'.

Compiling ./contracts/ConvertLib.sol...
Compiling ./contracts/TokenCoin.sol...


  Contract: TokenCoin
    ✓ should put 10000 TokenCoin in the first account
    ✓ should send coin correctly (147ms)


  2 passing (192ms)
  ```