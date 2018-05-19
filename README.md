# rapture Message Verification and Signing for Bitcore-rapture


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-rapture.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-rapture)
[![Build Status](https://img.shields.io/travis/rapturepay/bitcore-message-rapture.svg?branch=master&style=flat-square)](https://travis-ci.org/rapturepay/bitcore-message-rapture)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-rapture.svg?style=flat-square)](https://coveralls.io/r/rapturepay/bitcore-message-rapture?branch=master)

bitcore-message-rapture adds support for verifying and signing rapture messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-rapture repo](https://github.com/rapturepay/bitcore-rapture) for more information.

## Getting Started

```sh
npm install bitcore-message-rapture
```

```sh
bower install bitcore-message-rapture
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-rapture');
var Message = require('bitcore-message-rapture');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/RaptureCore/bitcore-lib-rapture/blob/master/CONTRIBUTING.md) on the main bitcore-rapture repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

