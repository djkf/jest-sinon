import { matcherHint, printExpected } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(
    ".not.toBeCalledImmediatelyBefore",
    "sinon.spy",
    "sinon.spy"
  )}\n\n Expected spies to have ${printExpected("not been called in order")}`;

const printFail = () => () =>
  `${matcherHint(
    ".toBeCalledImmediatelyBefore",
    "sinon.spy",
    "sinon.spy"
  )}\n\n Expected spies to have ${printExpected("been called in order")}`;

export default {
  toBeCalledImmediatelyBefore: (expected, anotherSpy) => {
    if (expected.calledImmediatelyBefore(anotherSpy)) {
      return { pass: true, message: printPass() };
    }

    return { pass: false, message: printFail() };
  }
};
