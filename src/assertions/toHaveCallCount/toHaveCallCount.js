import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import spyMatchers from '../../helpers/spyMatchers';
import isSinonSpy from '../../helpers/isSinonSpy';

const printPass = (expected, actual) => () =>
  `${matcherHint('.not.toHaveCallCount', 'sinon.spy', 'callCount')}\n\n` +
  `Expected spy to have not been called ${printExpected(expected)} time(s), ` +
  `instead received a spy that has been called ${printReceived(
    actual.callCount
  )} time(s)`;

const printFail = (expected, actual) => () =>
  `${matcherHint('.toHaveCallCount', 'sinon.spy', 'callCount')}\n\n` +
  `Expected spy to have been called ${printExpected(expected)} time(s), ` +
  `instead received a spy that has been called ${printReceived(
    actual.callCount
  )} time(s)`;

export default (actual, expected) => {
  if (isSinonSpy(actual)) {
    return expected === actual.callCount
      ? { pass: true, message: printPass(expected, actual) }
      : { pass: false, message: printFail(expected, actual) };
  }

  return spyMatchers.toHaveBeenCalledTimes(actual, expected);
};
