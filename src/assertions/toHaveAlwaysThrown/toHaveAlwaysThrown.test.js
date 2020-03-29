import sinon from 'sinon';
import toHaveAlwaysThrown from '.';

expect.extend({ toHaveAlwaysThrown });

describe('spy.toHaveAlwaysThrown', () => {
  const throwSpy = sinon.spy((throwError) => {
    if (throwError) {
      throw Error('error');
    }
  });

  beforeEach(() => {
    throwSpy.resetHistory();
  });

  it('should pass if error always thrown', () => {
    try {
      throwSpy(true);
      throwSpy(true);
    } catch (e) {
      expect(throwSpy).toHaveAlwaysThrown();
    }
  });

  it('should fail if error is not always thrown', () => {
    throwSpy(false);
    try {
      throwSpy(true);
    } catch (e) {
      expect(() => expect(throwSpy).toHaveAlwaysThrown()).toThrow();
    }
  });
});

describe('spy.not.toHaveAlwaysThrown', () => {
  const throwSpy = sinon.spy((throwError) => {
    if (throwError) {
      throw new Error();
    }
  });

  beforeEach(() => {
    throwSpy.resetHistory();
  });

  it('should pass if error is not always thrown', () => {
    throwSpy(false);
    try {
      throwSpy(true);
    } catch (e) {
      expect(throwSpy).not.toHaveAlwaysThrown();
    }
  });

  it('should fail if error always thrown', () => {
    try {
      throwSpy(true);
      throwSpy(true);
    } catch (e) {
      expect(() => expect(throwSpy).not.toHaveAlwaysThrown()).toThrow();
    }
  });
});
