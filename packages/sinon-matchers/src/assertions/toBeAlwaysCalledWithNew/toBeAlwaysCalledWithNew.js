import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(".not.toBeAlwaysCalledWithNew", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("not always been called with new")}, ` +
  `instead received a spy that has ${printReceived(
    "always been called with new"
  )}`;

const printFail = () => () =>
  `${matcherHint(".toBeAlwaysCalledWithNew", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("always been called with new")}, ` +
  `instead received a spy that has ${printReceived(
    "not always been called with new"
  )}`;

export default {
  toBeAlwaysCalledWithNew: expected => {
    if (expected.alwaysCalledWithNew()) {
      return { pass: true, message: printPass() };
    }

    return { pass: false, message: printFail() };
  }
};
