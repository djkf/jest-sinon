import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledAfter", "sinon.spy", "sinon.spy") +
  "\n\n" +
  `Expected spies to have ${printExpected("not been called in order")}`;

const printFail = spy => () =>
  matcherHint(".toBeCalledAfter", "sinon.spy", "sinon.spy") +
  "\n\n" +
  `Expected spies to have ${printExpected("been called in order")}`;

export default {
  toBeCalledBefore: (expected, anotherSpy) => {
    if (expected.calledBefore(anotherSpy)) {
      return { pass: true, message: printPass(expected, anotherSpy) };
    }

    return { pass: false, message: printFail(expected, anotherSpy) };
  }
};
