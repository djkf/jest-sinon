import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(".not.toBeCalledWithNew", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("not been called with new")}, ` +
  `instead received a spy that has ${printReceived("been called with new")}`;

const printFail = () => () =>
  `${matcherHint(".toBeCalledWithNew", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("been called with new")}, ` +
  `instead received a spy that has ${printReceived(
    "not been called with new"
  )}`;

export default {
  toBeCalledWithNew: expected => {
    if (expected.calledWithNew()) {
      return { pass: true, message: printPass() };
    }

    return { pass: false, message: printFail() };
  }
};
