import sinon from 'sinon';
import toBeCalledAfter from '.';

expect.extend({ toBeCalledAfter });

describe('spy.toBeCalledAfter', () => {
  const beforeSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it('should pass if spies are called in order', () => {
    beforeSpy();
    afterSpy();

    expect(afterSpy).toBeCalledAfter(beforeSpy);
  });

  it('should fail if spies are called out of order', () => {
    afterSpy();
    beforeSpy();

    expect(() => expect(afterSpy).toBeCalledAfter(beforeSpy)).toThrow();
  });
});

describe('spy.not.toBeCalledAfter', () => {
  const beforeSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it('should pass if spies are called out of order', () => {
    afterSpy();
    beforeSpy();

    expect(afterSpy).not.toBeCalledAfter(beforeSpy);
  });

  it('should fail if spies are called in order', () => {
    beforeSpy();
    afterSpy();

    expect(() => expect(afterSpy).not.toBeCalledAfter(beforeSpy)).toThrow();
  });
});
