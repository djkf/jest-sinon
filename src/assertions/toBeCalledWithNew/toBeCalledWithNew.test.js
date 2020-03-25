/* eslint-disable new-cap, no-new */
import sinon from 'sinon';
import toBeCalledWithNew from '.';

expect.extend({ toBeCalledWithNew });

describe('spy.toBeCalledWithNew', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called with new', () => {
    new spy();

    expect(spy).toBeCalledWithNew();
  });

  it('should fail if not called with new', () => {
    spy();

    expect(() => expect(spy).toBeCalledWithNew()).toThrow();
  });
});

describe('spy.not.toBeCalledWithNew', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if not called with new', () => {
    spy();

    expect(spy).not.toBeCalledWithNew();
  });

  it('should fail if called with new', () => {
    new spy();

    expect(() => expect(spy).not.toBeCalledWithNew()).toThrow();
  });
});
