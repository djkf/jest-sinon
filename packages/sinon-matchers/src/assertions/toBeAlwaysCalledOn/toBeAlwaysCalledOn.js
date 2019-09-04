import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";
import sinon from "sinon";

const printPass = spy => () =>
  matcherHint(".not.toBeAlwaysCalledOn", "sinon.spy", "obj") +
  "\n\n" +
  `Expected spy to have ${printExpected("not always been called on obj")}, ` +
  `instead received a spy that has ${printReceived(
    "always been called on obj"
  )}`;

const printFail = spy => () =>
  matcherHint(".toBeAlwaysCalledOn", "sinon.spy", "obj") +
  "\n\n" +
  `Expected spy to have ${printExpected("always been called on obj")}, ` +
  `instead received a spy that has ${printReceived(
    "not always been called on obj"
  )}`;

export default {
  toBeAlwaysCalledOn: (expected, obj) => {
    if (expected.alwaysCalledOn(obj)) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
