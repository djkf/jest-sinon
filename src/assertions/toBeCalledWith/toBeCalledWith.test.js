import sinon from 'sinon';

const [a, b, c] = ['a', 'b', 'c'];

describe('spy.toBeCalledWith', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called with correct args', () => {
    spy(a, b, c);

    expect(spy).toBeCalledWith(a, b, c);
  });

  it('should pass if called with correct args with jest mocking', () => {
    const jestSpy = jest.fn();

    jestSpy(a, b, c);

    expect(jestSpy).toBeCalledWith(a, b, c);
  });

  it('should fail if not called with correct args', () => {
    spy(a);

    expect(() => expect(spy).toBeCalledWith(a, b, c)).toThrow();
  });
});

describe('spy.not.toBeCalledWith', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if not called with correct args', () => {
    spy(a);

    expect(spy).not.toBeCalledWith(a, b, c);
  });

  it('should pass if not called with correct args with jest mocking', () => {
    const jestSpy = jest.fn();

    jestSpy(a);

    expect(jestSpy).not.toBeCalledWith(a, b, c);
  });

  it('should fail if called with correct args', () => {
    spy(a, b, c);

    expect(() => expect(spy).not.toBeCalledWith(a, b, c)).toThrow();
  });
});
