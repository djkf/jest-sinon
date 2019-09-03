import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledImmediatelyAfter", "sinon.spy", "sinon.spy") +
  "\n\n" +
  `Expected spies to have ${printExpected("not been called in order")}`;

const printFail = spy => () =>
  matcherHint(".toBeCalledImmediatelyAfter", "sinon.spy", "sinon.spy") +
  "\n\n" +
  `Expected spies to have ${printExpected("been called in order")}`;

export default {
  toBeCalledImmediatelyAfter: (expected, anotherSpy) => {
    if (expected.calledImmediatelyAfter(anotherSpy)) {
      return { pass: true, message: printPass(expected, anotherSpy) };
    }

    return { pass: false, message: printFail(expected, anotherSpy) };
  }
};
