import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import toThrowMatchers from 'expect/build/toThrowMatchers';
import isSinonSpy from '../../helpers/isSinonSpy';

const printPass = () => () =>
  `${matcherHint('.not.toHaveThrown', 'sinon.spy', 'TypeError | obj')}\n\n` +
  `Expected spy to have ${printExpected('not thrown an error')}, ` +
  `instead received a spy that has ${printReceived('thrown an error')}`;

const printFail = () => () =>
  `${matcherHint('.toHaveThrown', 'sinon.spy', 'TypeError | obj')}\n\n` +
  `Expected spy to have ${printExpected('thrown an error')}, ` +
  `instead received a spy that has ${printReceived('not thrown an error')}`;

export default (expected, errorObjOrErrorTypeStringOrNothing) => {
  if (isSinonSpy(expected)) {
    return expected.threw(errorObjOrErrorTypeStringOrNothing)
      ? { pass: true, message: printPass() }
      : { pass: false, message: printFail() };
  }

  return toThrowMatchers.toThrow(expected, errorObjOrErrorTypeStringOrNothing);
};
