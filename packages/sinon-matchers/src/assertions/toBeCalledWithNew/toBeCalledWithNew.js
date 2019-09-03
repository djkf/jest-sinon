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

export default expected => {
  return expected.calledWithNew()
    ? { pass: true, message: printPass() }
    : { pass: false, message: printFail() };
};
