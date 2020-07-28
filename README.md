# cryptocli

Open source Command Line Interface that will let you check the current stock prices for any crypto currency.

## What was used to build this?

HTML, CSS, JavaScript(Commander.js, Node.js) + [nomics](https://nomics.com/) API

# How to use

npm install

npm link

# Commands

## Help & Commands

cryptocli -h

## Version

cryptocli -V

## API Key Commands

cryptocli key set
cryptocli key show
cryptocli key remove

## Crypto Check Commands

cryptocli check price

## Check Specific Coins (default: BTN,ETH,XRP)

cryptocli check --coin=BTC,ETH

## Choose Currency (Default: USD)

cryptocli check --cur=EUR

# Version

1.0.1
