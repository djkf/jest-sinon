import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = () => () =>
  `${matcherHint(".not.toHaveAlwaysReturnedWith", "sinon.spy", "obj")}\n\n` +
  `Expected spy to have ${printExpected("not returned obj")}, ` +
  `instead received a spy that has ${printReceived("returned obj")}`;

const printFail = () => () =>
  `${matcherHint(".toHaveAlwaysReturnedWith", "sinon.spy", "obj")}\n\n` +
  `Expected spy to have ${printExpected("been returned obj")}, ` +
  `instead received a spy that has ${printReceived("not returned obj")}`;

export default (expected, obj) => {
  return expected.alwaysReturned(obj)
    ? { pass: true, message: printPass() }
    : { pass: false, message: printFail() };
};
