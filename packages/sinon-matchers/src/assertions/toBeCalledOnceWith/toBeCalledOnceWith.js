import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledOnceWith", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected(
    "not been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "been called with correct arguments"
  )}`;

const printFail = spy => () =>
  matcherHint(".toBeCalledOnceWith", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected(
    "been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with correct arguments"
  )}`;

export default {
  toBeCalledOnceWith: (expected, ...rest) => {
    if (expected.calledOnceWith(...rest)) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
