import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeAlwaysCalledWith", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected(
    "not been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "been called with correct arguments"
  )}`;

const printFail = spy => () =>
  matcherHint(".toBeAlwaysCalledWith", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected(
    "been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with correct arguments"
  )}`;

export default {
  toBeAlwaysCalledWith: (expected, ...rest) => {
    if (expected.alwaysCalledWith(...rest)) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
