import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = spy => () =>
  `${matcherHint(".not.toBeCalledTwice", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("not been called twice")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

const printFail = spy => () =>
  `${matcherHint(".toBeCalledTwice", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("been called twice")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

export default expected => {
  return expected.calledTwice
    ? { pass: true, message: printPass(expected) }
    : { pass: false, message: printFail(expected) };
};
