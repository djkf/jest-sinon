import sinon from 'sinon';
import toBeCalledImmediatelyBefore from '.';

expect.extend({ toBeCalledImmediatelyBefore });

describe('spy.toBeCalledImmediatelyBefore', () => {
  const beforeSpy = sinon.spy();
  const mediumSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    mediumSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it('should pass if spies are called in order', () => {
    beforeSpy();
    afterSpy();

    expect(beforeSpy).toBeCalledImmediatelyBefore(afterSpy);
  });

  it('should fail if spies are called out of order', () => {
    beforeSpy();
    mediumSpy();
    afterSpy();

    expect(() =>
      expect(beforeSpy).toBeCalledImmediatelyBefore(afterSpy)
    ).toThrow();
  });
});

describe('spy.not.toBeCalledImmediatelyBefore', () => {
  const beforeSpy = sinon.spy();
  const mediumSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    mediumSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it('should pass if spies are called out of order', () => {
    beforeSpy();
    mediumSpy();
    afterSpy();

    expect(beforeSpy).not.toBeCalledImmediatelyBefore(afterSpy);
  });

  it('should fail if spies are called in order', () => {
    beforeSpy();
    afterSpy();

    expect(() =>
      expect(beforeSpy).not.toBeCalledImmediatelyBefore(afterSpy)
    ).toThrow();
  });
});
