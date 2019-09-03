import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeAlwaysCalledWithNew", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected("not always been called with new")}, ` +
  `instead received a spy that has ${printReceived('always been called with new')}`;

const printFail = spy => () =>
  matcherHint(".toBeAlwaysCalledWithNew", "sinon.spy", "") +
  "\n\n" +
  `Expected spy to have ${printExpected("not always been called with new")}, ` +
  `instead received a spy that has ${printReceived('always been called')}`;

export default {
  toBeAlwaysCalledWithNew: expected => {
    if (expected.alwaysCalledWithNew()) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
