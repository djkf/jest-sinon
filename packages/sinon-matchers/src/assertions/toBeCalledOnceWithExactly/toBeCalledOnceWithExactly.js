import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeCalledOnceWithExactly", "sinon.spy", "obj") +
  "\n\n" +
  `Expected spy to have ${printExpected(
    "not been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "been called with correct arguments"
  )}`;

const printFail = spy => () =>
  matcherHint(".toBeCalledOnceWithExactly", "sinon.spy", "obj") +
  "\n\n" +
  `Expected spy to have ${printExpected(
    "been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with correct arguments"
  )}`;

export default {
  toBeCalledOnceWithExactly: (expected, ...rest) => {
    if (expected.calledOnceWithExactly(...rest)) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
