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

cryptocli check --crypto=BTC,ETH,etc.

### Available Crypto Currencies (You can check over 2,000 difference currencies but it would be way to much to list here. You can find over 100+ supported currencies [here]())

Bitcoin | BTC
Ethereum | ETH
Tether | USDT
Ripple | XRP
Cardano | ADA
Litecoin | LTC
Dogecoin | DOGE

## Choose Currency Conversion

cryptocli check --cur=USD

### Supported Languages

United States Dollar | USD
Euro | EUR
Chinese Yuan | CNY
Japanese Yen | JPY

# Version

1.0.3
