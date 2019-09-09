# Jest-Sinon

Jest-Sinon is a collection of assertions for using the mocking library [Sinon.js](https://sinonjs.org/) with [Jest](https://jestjs.io/).

An Example

```js
const foo = () => {};
const bar = sinon.spy();

// instead of:
expect(bar).calledWith(foo)).toBeTruthy;

// we can write:
expect(bar)).toHaveBeenCalledWith(foo);
```

> **Warning!** Using this library will **OVERRIDE** some of the in-built Jest mocking assertions. Work is being done in a later version to help mitigate this.

## Installation

With npm:

```
npm install --save-dev jest-sinon
```

With yarn:

```
yarn add -D jest-sinon
```

## Setup

### Jest 24+

Add jest-sinon to your Jest `setupFilesAfterEnv` configuration.

```json
"jest": {
  "setupFilesAfterEnv": ["jest-sinon"]
}
```

### Jest 23 or below

```json
"jest": {
  "setupTestFrameworkScriptFile": "./testSetup.js"
}
```

```js
// testSetup.js

require("jest-sinon");
```

## Usage

Jest-Sinon adds a number of assertions to help test Sinon Spies, Mocks and Stubs. Below is a list of currently implemented assertions.

#### `.toHaveBeenAlwaysCalledOn()`

> Also under the alias: `.toBeAlwaysCalledOn()`

#### `.toHaveBeenAlwaysCalledWith()`

> Also under the alias: `.toBenAlwaysCalledWith()`

#### `.toHaveBeenAlwaysCalledWithExactly()`

> Also under the alias: `.toBeAlwaysCalledWithExactly()`

#### `.toHaveBeenAlwaysCalledWithMatch()`

> Also under the alias: `.toBeAlwaysCalledWithMatch()`

#### `.toHaveBeenAlwaysCalledWithNew()`

> Also under the alias: `.toBeAlwaysCalledWithNew()`

#### `.toHaveBeenCalled()`

> Also under the alias: `.toBeCalled()`

#### `.toHaveBeenCalledAfter()`

> Also under the alias: `.toBeCalledAfter()`

#### `.toHaveBeenCalledBefore()`

> Also under the alias: `.toBeCalledBefore()`

#### `.toHaveBeenCalledImmediatelyAfter()`

> Also under the alias: `.toBeCalledImmediatelyAfter()`

#### `.toHaveBeenCalledImmediatelyBefore()`

> Also under the alias: `.toBeCalledImmediatelyBefore()`

#### `.toHaveBeenCalledOn()`

> Also under the alias: `.toBeCalledOn()`

#### `.toHaveBeenCalledOnce()`

> Also under the alias: `.toBeCalledOnce()`

#### `.toHaveBeenCalledOnceWith()`

> Also under the alias: `.toBeCalledOnceWith()`

#### `.toHaveBeenCalledOnceWithExactly()`

> Also under the alias: `.toBeCalledOnceWithExactly()`

#### `.toHaveBeenCalledThrice()`

> Also under the alias: `.toBeCalledThrice()`

#### `.toHaveBeenCalledTwice()`

> Also under the alias: `.toBeCalledTwice()`

#### `.toHaveBeenCalledWith()`

> Also under the alias: `.toBeCalledWith()`

#### `.toHaveBeenCalledWithExactly()`

> Also under the alias: `.toBeCalledWithExactly()`

#### `.toHaveBeenCalledWithMatch()`

> Also under the alias: `.toBeCalledWithMatch()`

#### `.toHaveBeenCalledWithNew()`

> Also under the alias: `.toBeCalledWithNew()`

#### `.toHaveCallCount()`

> Also under the alias: `.toBeCalledWithNew()`, `.toHaveBeenCalledTimes()` and `.toBeCalledTimes()`

For more information about what these do, you can visit [Sinon.js](https://sinonjs.org/).

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## License

[MIT](https://github.com/nishanths/license/blob/master/LICENSE)
