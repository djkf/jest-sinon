import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import spyMatchers from 'expect/build/spyMatchers';
import isSinonSpy from '../../helpers/isSinonSpy';

const printPass = (spy) => () =>
  `${matcherHint('.not.toBeCalled', 'sinon.spy', '')}\n\n` +
  `Expected spy to have ${printExpected('not been called')}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

const printFail = (spy) => () =>
  `${matcherHint('.toBeCalled', 'sinon.spy', '')}\n\n` +
  `Expected spy to have ${printExpected('been called')}, ` +
  `instead received a spy that has been called ${printReceived(
    spy.callCount
  )} time(s)`;

export default (expected) => {
  if (isSinonSpy(expected)) {
    return expected.called
      ? { pass: true, message: printPass(expected) }
      : { pass: false, message: printFail(expected) };
  }

  return spyMatchers.toHaveBeenCalled(expected);
};
