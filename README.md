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

Use [`browserify`](https://github.com/substack/node-browserify) in conjunction with [`envify`](https://github.com/hughsk/envify). **envify must be installed separately since it is not explicitly listed as a dependency in the `package.json`** (because not everyone will use `invariant` on the browser).

#### Node

Just use it. The node version is optimized around the performance implications of accessing `process.env`. The value of `process.env.NODE_ENV` is cache, and repeatedly used instead of querying `proces.env`. See [Server rendering is slower with npm react #812](https://github.com/facebook/react/issues/812)
