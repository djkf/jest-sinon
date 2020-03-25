import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

const printPass = () => () =>
  `${matcherHint(
    '.not.toHaveAlwaysThrown',
    'sinon.spy',
    'TypeError | obj'
  )}\n\n` +
  `Expected spy to have ${printExpected('not thrown an error')}, ` +
  `instead received a spy that has ${printReceived('thrown an error')}`;

const printFail = () => () =>
  `${matcherHint('.toHaveAlwaysThrown', 'sinon.spy', 'TypeError | obj')}\n\n` +
  `Expected spy to have ${printExpected('thrown an error')}, ` +
  `instead received a spy that has ${printReceived('not thrown an error')}`;

export default (expected, errorObjOrErrorTypeStringOrNothing) => {
  return expected.alwaysThrew(errorObjOrErrorTypeStringOrNothing)
    ? { pass: true, message: printPass() }
    : { pass: false, message: printFail() };
};
