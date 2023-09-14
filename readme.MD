# Easyly Node.js Library


![npm](https://img.shields.io/npm/v/easyly)
![NPM](https://img.shields.io/npm/l/easyly)

## Installation

Use `npm` to install the module:

```sh
npm install easyly
```


## Usage

The package needs to be configured with your account's secret key, which is available in the [Easyly Dashboard](https://app.easyly.com). 
Require it with the key's value:

```js
const easyly = require('easyly')('sk_test_...');

easyly.leads.create({
    name: 'John Doe',
    email: 'john@example.com',
})
    .then(lead => console.log(lead.id))
    .catch(error => console.error(error));
```



### Full documentation can be found on the [Easyly Documentation](https://api.easyly.com)

### Contributing

If you would like to contribute to Easyly, please make sure to read our
[contributor guidelines](CONTRIBUTING.md).