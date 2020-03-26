[![NPM version](https://img.shields.io/npm/v/jest-sinon.svg)](https://www.npmjs.com/package/jest-sinon)
[![Downloads](https://img.shields.io/npm/dm/jest-sinon.svg)](https://www.npmjs.com/package/jest-sinon)
[![Build Status](https://travis-ci.com/djkf/jest-sinon.svg?branch=master)](https://travis-ci.com/djkf/jest-sinon)
[![Known Vulnerabilities](https://snyk.io//test/github/djkf/jest-sinon/badge.svg?targetFile=package.json)](https://snyk.io//test/github/djkf/jest-sinon?targetFile=package.json)
[![codecov](https://codecov.io/gh/djkf/jest-sinon/branch/master/graph/badge.svg)](https://codecov.io/gh/djkf/jest-sinon)

# Jest-Sinon

Jest-Sinon is a collection of assertions for using the mocking library Sinon.js with Jest.

### Example

```js
const bar = () => {};
const foo = sinon.spy();

foo(bar);

// instead of:
expect(foo.calledWith(bar)).toBeTruthy;

// we can write:
expect(foo).toHaveBeenCalledWith(bar);
```

The assertions: `toHaveBeenCalledTimes`, `toThrow`, `toReturnWith`, `toHaveBeenCalled` and `toHaveBeenCalledWith` clash with the in-built `Jest` mocking framework. `Jest-Sinon` will try and detect which type of spy is being used and use the correct assertion. You should be able to use both mocking libraries in parallel.

```js
const foo = sinon.spy();
const bar = jest.fn();

foo();
bar();

expect(foo).toHaveBeenCalled(); // true
expect(bar).toHaveBeenCalled(); // true
```

## Why?

There are a number of reasons why you might want to use `Sinon.js` instead of (or as well as) the in-built mocking assertions. Some of the use cases include:

- Developer preference/familiarity to Sinon.js
- Migrating a code base from Mocha/Chai/Sinon to Jest
- To be _difficult_

Ultimately, it usually comes down to your own preferences and needs.

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

Add `Jest-Sinon` to your Jest `setupFilesAfterEnv` configuration.

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

require('jest-sinon');
```

## Usage

`Jest-Sinon` adds a number of assertions to help test `Sinon.js` Spies, Mocks and Stubs. Below is a list of currently implemented assertions.

#### `.toHaveBeenAlwaysCalledOn(obj)`

> Also under the alias: `.toBeAlwaysCalledOn()`

#### `.toHaveBeenAlwaysCalledWith(args1, arg2, ...)`

> Also under the alias: `.toBeAlwaysCalledWith()`

#### `.toHaveBeenAlwaysCalledWithExactly(args1, arg2, ...)`

> Also under the alias: `.toBeAlwaysCalledWithExactly()`

#### `.toHaveBeenAlwaysCalledWithMatch(arg1, arg2, ...)`

> Also under the alias: `.toBeAlwaysCalledWithMatch()`

#### `.toHaveBeenAlwaysCalledWithNew()`

> Also under the alias: `.toBeAlwaysCalledWithNew()`

#### `.toHaveBeenCalled()`

> Also under the alias: `.toBeCalled()`

#### `.toHaveBeenCalledAfter(anotherSpy)`

> Also under the alias: `.toBeCalledAfter()`

#### `.toHaveBeenCalledBefore(anotherSpy)`

> Also under the alias: `.toBeCalledBefore()`

#### `.toHaveBeenCalledImmediatelyAfter(anotherSpy)`

> Also under the alias: `.toBeCalledImmediatelyAfter()`

#### `.toHaveBeenCalledImmediatelyBefore(anotherSpy)`

> Also under the alias: `.toBeCalledImmediatelyBefore()`

#### `.toHaveBeenCalledOn(obj)`

> Also under the alias: `.toBeCalledOn()`

#### `.toHaveBeenCalledOnce()`

> Also under the alias: `.toBeCalledOnce()`

#### `.toHaveBeenCalledOnceWith(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledOnceWith()`

#### `.toHaveBeenCalledOnceWithExactly(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledOnceWithExactly()`

#### `.toHaveBeenCalledThrice()`

> Also under the alias: `.toBeCalledThrice()`

#### `.toHaveBeenCalledTwice()`

> Also under the alias: `.toBeCalledTwice()`

#### `.toHaveBeenCalledWith(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledWith()`

#### `.toHaveBeenCalledWithExactly(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledWithExactly()`

#### `.toHaveBeenCalledWithMatch(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledWithMatch()`

#### `.toHaveBeenCalledWithNew()`

> Also under the alias: `.toBeCalledWithNew()`

#### `.toHaveCallCount(number)`

> Also under the alias: `.toHaveBeenCalledTimes()` and `.toBeCalledTimes()`

#### `.toHaveReturnedWith(obj)`

> Also under the alias: `.toReturnWith()`, `.toHaveReturned()` and `.toReturn()`

#### `.toHaveAlwaysReturnedWith(obj)`

> Also under the alias: `.toAlwaysReturnWith()`

#### `.toHaveThrown(error?)`

> Also under the alias: `.toHaveThrownError()`, `.toThrow()`, and `.toThrowError()`

#### `.toHaveAlwaysThrown(error?)`

> Also under the alias: `.toHaveAlwaysThrownError()`, `.toAlwaysThrow()` and `.toAlwaysThrowError()`

For more information about what these do, you can visit [Sinon.js](https://sinonjs.org/).

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!
