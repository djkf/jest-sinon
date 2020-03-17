import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import spyMatchers from "expect/build/spyMatchers";
import isSinonSpy from "../../helpers/isSinonSpy";

const printPass = () => () =>
  `${matcherHint(".not.toBeCalledWith", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected(
    "not been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "been called with correct arguments"
  )}`;

const printFail = () => () =>
  `${matcherHint(".toBeCalledWith", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected(
    "been called with correct arguments"
  )}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with correct arguments"
  )}`;

export default (expected, ...rest) => {
  if (isSinonSpy(expected)) {
    return expected.calledWith(...rest)
      ? { pass: true, message: printPass() }
      : { pass: false, message: printFail() };
  }

  return spyMatchers.toHaveBeenCalledWith(expected, ...rest);
};
