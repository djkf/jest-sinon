import sinon from 'sinon';
import toBeCalledThrice from '.';

expect.extend({ toBeCalledThrice });

describe('spy.toBeCalledThrice', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called the correct number of times', () => {
    spy();
    spy();
    spy();

    expect(spy).toBeCalledThrice();
  });

  it('should fail if called the incorrect number of times', () => {
    spy();

    expect(() => expect(spy).toBeCalledThrice()).toThrow();
  });
});

describe('spy.not.toBeCalledThrice', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called the incorrect number of times', () => {
    spy();

    expect(spy).not.toBeCalledThrice();
  });

  it('should fail if called the correct number of times', () => {
    spy();
    spy();
    spy();

    expect(() => expect(spy).not.toBeCalledThrice()).toThrow();
  });
});
