import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledImmediatelyBefore", "sinon.spy", "sinon.spy") +
  "\n\n" +
  `Expected spies to have ${printExpected("not been called in order")}`;

const printFail = spy => () =>
  matcherHint(".toBeCalledImmediatelyBefore", "sinon.spy", "sinon.spy") +
  "\n\n" +
  `Expected spies to have ${printExpected("been called in order")}`;

export default {
  toBeCalledImmediatelyBefore: (expected, anotherSpy) => {
    if (expected.calledImmediatelyBefore(anotherSpy)) {
      return { pass: true, message: printPass(expected, anotherSpy) };
    }

    return { pass: false, message: printFail(expected, anotherSpy) };
  }
};
