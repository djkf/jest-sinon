import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

const printPass = () => () =>
  `${matcherHint('.not.toBeCalledOn', 'sinon.spy', 'obj')}\n\n` +
  `Expected spy to have ${printExpected('not been called on obj')}, ` +
  `instead received a spy that has ${printReceived('been called on obj')}`;

const printFail = () => () =>
  `${matcherHint('.toBeCalledOn', 'sinon.spy', 'obj')}\n\n` +
  `Expected spy to have ${printExpected('been called on obj')}, ` +
  `instead received a spy that has ${printReceived('been called on obj')}`;

export default (expected, obj) => {
  return expected.calledOn(obj)
    ? { pass: true, message: printPass(expected) }
    : { pass: false, message: printFail(expected) };
};
