const axios = require('axios');
const color = require('colors');
// API URL & location of API key
class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }
  // Imports the API with the fields we use for the interface
  async getPriceData(cryptoOption, curOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption,
        minimumFractionDigits: 0,
        maximumFractionDigits: 5
      });

      const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${cryptoOption}&convert=${curOption}`);

      let output = '';

      res.data.forEach(crypto => {
        output += `Crypto Coin: ${crypto.symbol.yellow} (${crypto.name}) | Price: ${formatter.format(crypto.price).green} | Rank: ${crypto.rank.blue}\n`;
      });

      return output;

    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API key is invalid - Please go to https://nomics.com');
  } else if (err.response.status === 404) {
    throw new Error('Your API key is not responding');
  } else {
    throw new Error('Something is not working');
  }
}

module.exports = CryptoAPI;