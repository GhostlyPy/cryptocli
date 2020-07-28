const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }
  // Sets the API key
  setKey(key) {
    this.conf.set('apikey', key);
    return key;
  }
  // Gets the API key
  getKey() {
    const key = this.conf.get('apikey');

    if (!key) {
      throw new Error('No API Key Found - Get a key at https://nomics.com');
    }

    return key;
  }
  // Removes the current API key
  deleteKey() {
    const key = this.conf.get('apikey');

    if (!key) {
      throw new Error('No API Key Found - Get a key at https://nomics.com');
    }

    this.conf.delete('apikey');

    return;
  }
}

module.exports = KeyManager;