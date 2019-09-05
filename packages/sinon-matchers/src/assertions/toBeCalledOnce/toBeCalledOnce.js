import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = spy => () =>
  `${matcherHint(".not.toBeCalledOnce", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("not been called once")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

const printFail = spy => () =>
  `${matcherHint(".toBeCalledOnce", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("been called once")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

export default {
  toBeCalledOnce: expected => {
    if (expected.calledOnce) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
