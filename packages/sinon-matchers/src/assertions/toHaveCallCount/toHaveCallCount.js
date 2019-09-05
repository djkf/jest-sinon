import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = (expected, actual) => () =>
  `${matcherHint(".not.toHaveCallCount", "sinon.spy", "callCount")}\n\n` +
  `Expected spy to have not been called ${printExpected(expected)} time(s), ` +
  `instead received a spy that has been called ${printReceived(
    actual.callCount
  )} time(s)`;

const printFail = (expected, actual) => () =>
  `${matcherHint(".toHaveCallCount", "sinon.spy", "callCount")}\n\n` +
  `Expected spy to have been called ${printExpected(expected)} time(s), ` +
  `instead received a spy that has been called ${printReceived(
    actual.callCount
  )} time(s)`;

export default {
  toHaveCallCount: (actual, expected) => {
    if (expected === actual.callCount) {
      return { pass: true, message: printPass(expected, actual) };
    }

    return { pass: false, message: printFail(expected, actual) };
  }
};
