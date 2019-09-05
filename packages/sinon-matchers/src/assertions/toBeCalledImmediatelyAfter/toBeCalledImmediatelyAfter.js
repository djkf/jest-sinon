import { matcherHint, printExpected } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(
    ".not.toBeCalledImmediatelyAfter",
    "sinon.spy",
    "sinon.spy"
  )}\n\n Expected spies to have ${printExpected("not been called in order")}`;

const printFail = () => () =>
  `${matcherHint(
    ".toBeCalledImmediatelyAfter",
    "sinon.spy",
    "sinon.spy"
  )}\n\n Expected spies to have ${printExpected("been called in order")}`;

export default {
  toBeCalledImmediatelyAfter: (expected, anotherSpy) => {
    if (expected.calledImmediatelyAfter(anotherSpy)) {
      return { pass: true, message: printPass() };
    }

    return { pass: false, message: printFail() };
  }
};
