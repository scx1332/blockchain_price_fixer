# blockchain_price_fixer
Tool for manipulating blockchain price (designed for testnet only)

## Warning
This is script is using lots of gas. It's for testing purposes only.
Tool is tested only on testnet. Gas estimation could be wrong on mainnet.

## Usage
Setup your environment in .env and spin up docker

```
DEV_PROVIDER=
DEV_PRIVATE_KEY=
DEV_CHAIN_ID=
CHANGE_TARGET_EVERY_SECONDS=10
LOWER_TARGET_GWEI=0.2
HIGHEST_TARGET_GWEI=0.6
```