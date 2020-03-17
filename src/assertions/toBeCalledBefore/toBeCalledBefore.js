import { matcherHint, printExpected } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(".not.toBeCalledBefore", "sinon.spy", "sinon.spy")}\n\n` +
  `Expected spies to have ${printExpected("not been called in order")}`;

const printFail = () => () =>
  `${matcherHint(".toBeCalledBefore", "sinon.spy", "sinon.spy")}\n\n` +
  `Expected spies to have ${printExpected("been called in order")}`;

export default (expected, anotherSpy) => {
  return expected.calledBefore(anotherSpy)
    ? { pass: true, message: printPass() }
    : { pass: false, message: printFail() };
};
