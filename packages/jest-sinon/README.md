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

Copyright (c) 2019-present Darrel Fox

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
