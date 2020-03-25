import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

const printPass = () => () =>
  `${matcherHint('.not.toBeAlwaysCalledOn', 'sinon.spy', 'obj')}\n\n` +
  `Expected spy to have ${printExpected('not always been called on obj')}, ` +
  `instead received a spy that has ${printReceived(
    'always been called on obj'
  )}`;

const printFail = () => () =>
  `${matcherHint('.toBeAlwaysCalledOn', 'sinon.spy', 'obj')}\n\n` +
  `Expected spy to have ${printExpected('always been called on obj')}, ` +
  `instead received a spy that has ${printReceived(
    'not always been called on obj'
  )}`;

export default (expected, obj) => {
  return expected.alwaysCalledOn(obj)
    ? { pass: true, message: printPass() }
    : { pass: false, message: printFail() };
};
