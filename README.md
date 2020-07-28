# cryptocli

Open source Command Line Interface that will let you check the current stock prices for any crypto currency.

## What was used to build this?

HTML, CSS, JavaScript (Commander.js, Node.js) + [nomics API](https://p.nomics.com/cryptocurrency-bitcoin-api)

# How to use

npm install

npm link

# Commands

cryptocli -h,--help | Help with commands

cryptocli -V,--version | Displays the Version used

cryptocli key set | Used for setting the API key obtained from the nomics API

cryptocli key show | Shows your current API key being used

cryptocli key remove | Removes the active API key

cryptocli check price | Displays the coin, price, and rank in the terminal (Defaults: BTC,ETH,XRP)

cryptocli check price --crypto=BTC | Displays the coin, price, and rank of a specific coin (_Over 2,000 coins supported!_)

cryptocli check price --cur=USD | Converts the current price of the selected crypto currency to USD, EUR, JPY, or CNY

### Available Crypto Currencies (You can check over 2,000 difference currencies but it would be way to much to list here. You can find over 100+ supported currencies [here](https://github.com/GhostlyPy/cryptocli/blob/master/List/Supported_Currencies.csv))

Bitcoin | BTC
Ethereum | ETH
Tether | USDT
Ripple | XRP
Cardano | ADA
Litecoin | LTC
Dogecoin | DOGE

### Supported Languages

United States Dollar | USD
Euro | EUR
Chinese Yuan | CNY
Japanese Yen | JPY

# Version

1.1.0
