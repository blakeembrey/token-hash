# Token Hash

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Generate base64url encoding from the left-most half of the hash of a token.
> -- [OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html#HybridIDToken)

## Installation

```
npm install token-hash --save
```

## Usage

```js
import { tokenHash } from "token-hash";

tokenHash("RS256", "aabbcc"); //=> "pbQy7gMHvn-iOqAEYfVO7g"
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/token-hash.svg?style=flat
[npm-url]: https://npmjs.org/package/token-hash
[downloads-image]: https://img.shields.io/npm/dm/token-hash.svg?style=flat
[downloads-url]: https://npmjs.org/package/token-hash
[travis-image]: https://img.shields.io/travis/blakeembrey/token-hash.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/token-hash
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/token-hash.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/token-hash?branch=master
