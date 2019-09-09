import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(".not.toBeCalledOnceWith", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected(
    "not been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "been called with correct arguments"
  )}`;

const printFail = () => () =>
  `${matcherHint(".toBeCalledOnceWith", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected(
    "been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with correct arguments"
  )}`;

export default (expected, ...rest) => {
  return expected.calledOnceWith(...rest)
    ? { pass: true, message: printPass() }
    : { pass: false, message: printFail() };
};
