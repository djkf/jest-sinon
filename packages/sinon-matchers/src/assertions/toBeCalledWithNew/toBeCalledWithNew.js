import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledWithNew", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected("not been called with new")}, ` +
  `instead received a spy that has ${printReceived("been called with new")}`;

const printFail = spy => () =>
  matcherHint(".toBeCalledWithNew", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected("been called with new")}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with new"
  )}`;

export default {
  toBeCalledWithNew: expected => {
    if (expected.calledWithNew()) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
