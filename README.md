# invariant #

A mirror of Facebook's `invariant` (e.g. [React](https://github.com/facebook/react/blob/master/src/vendor/core/invariant.js), [flux](https://github.com/facebook/flux/blob/master/src/invariant.js)).

### Usage

```sh
npm install envify invariant
```

```js
var invariant = require('invariant');
```

#### Browser

When used with [`browserify`](https://github.com/substack/node-browserify), it'll use `browser.js` (instead of `invariant.js`) and the [`envify`](https://github.com/hughsk/envify) transform will inline the value of `process.env.NODE_ENV`.

#### Node

The node version is optimized around the performance implications of accessing `process.env`. The value of `process.env.NODE_ENV` is cached, and repeatedly used instead of reading `proces.env`. See [Server rendering is slower with npm react #812](https://github.com/facebook/react/issues/812)
