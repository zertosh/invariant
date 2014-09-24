# invariant #

A mirror of Facebook's `invariant` (e.g. [React](https://github.com/facebook/react/blob/master/src/vendor/core/invariant.js), [flux](https://github.com/facebook/flux/blob/master/src/invariant.js)).

**Modifications:** In the original code, the "invariant message" (`format`) is expected to not be `undefined` when `__DEV__` is `true`. `__DEV__` is transformed during the build process to `process.env.NODE_ENV !== 'production'`. Because `process.env` is not a regular object, but rather an object with getters to the environment, it has performance implications. So, to mitigate, the code has been commented out and `__DEV__` has been replaced with `process.env.NODE_ENV !== 'production'` for clarity.

_Original_:_
```js
  if (__DEV__) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }
```

_Modified:_
```js
  // if (process.env.NODE_ENV !== 'production') {
  //  if (format === undefined) {
  //    throw new Error('invariant requires an error message argument');
  //  }
  // }
```

Additional information: [Server rendering is slower with npm react #812](https://github.com/facebook/react/issues/812)
