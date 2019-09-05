import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

const printPass = spy => () =>
  `${matcherHint(".not.toBeCalled", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("not been called")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

const printFail = spy => () =>
  `${matcherHint(".toBeCalled", "sinon.spy", "")}\n\n` +
  `Expected spy to have ${printExpected("been called")}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

export default {
  toBeCalled: expected => {
    if (expected.called) {
      return { pass: true, message: printPass(expected) };
    }

    return { pass: false, message: printFail(expected) };
  }
};
