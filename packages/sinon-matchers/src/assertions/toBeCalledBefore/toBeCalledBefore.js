import { matcherHint, printExpected } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(".not.toBeCalledBefore", "sinon.spy", "sinon.spy")}\n\n` +
  `Expected spies to have ${printExpected("not been called in order")}`;

const printFail = () => () =>
  `${matcherHint(".toBeCalledBefore", "sinon.spy", "sinon.spy")}\n\n` +
  `Expected spies to have ${printExpected("been called in order")}`;

export default {
  toBeCalledBefore: (expected, anotherSpy) => {
    if (expected.calledBefore(anotherSpy)) {
      return { pass: true, message: printPass() };
    }

    return { pass: false, message: printFail() };
  }
};
