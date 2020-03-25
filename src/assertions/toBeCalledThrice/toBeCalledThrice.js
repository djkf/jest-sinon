import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

const printPass = (spy) => () =>
  `${matcherHint('.not.toBeCalledThrice', 'sinon.spy', '')}\n\n` +
  `Expected spy to have ${printExpected('not been called thrice')}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

const printFail = (spy) => () =>
  `${matcherHint('.toBeCalledThrice', 'sinon.spy', '')}\n\n` +
  `Expected spy to have ${printExpected('been called thrice')}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

export default (expected) => {
  return expected.calledThrice
    ? { pass: true, message: printPass(expected) }
    : { pass: false, message: printFail(expected) };
};
