import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledTwice", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected("not been called twice")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

const printFail = spy => () =>
  matcherHint(".toBeCalledTwice", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected("been called twice")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

export default {
  toBeCalledTwice: expected => {
    if (expected.calledTwice) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
