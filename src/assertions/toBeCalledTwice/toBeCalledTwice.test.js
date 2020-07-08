import sinon from 'sinon';

describe('spy.toBeCalledTwice', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called the correct number of times', () => {
    spy();
    spy();

    expect(spy).toBeCalledTwice();
  });

  it('should fail if called the incorrect number of times', () => {
    expect(() => expect(spy).toBeCalledTwice()).toThrow();
  });
});

describe('spy.not.toBeCalledTwice', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called the incorrect number of times', () => {
    expect(spy).not.toBeCalledTwice();
  });

  it('should fail if called the correct number of times', () => {
    spy();
    spy();

    expect(() => expect(spy).not.toBeCalledTwice()).toThrow();
  });
});
