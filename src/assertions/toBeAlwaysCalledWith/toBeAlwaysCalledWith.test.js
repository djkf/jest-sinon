import sinon from 'sinon';

const [a, b, c] = ['a', 'b', 'c'];

describe('spy.toBeAlwaysCalledWith', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if always called with correct args', () => {
    spy(a, b, c);

    expect(spy).toBeAlwaysCalledWith(a, b, c);
  });

  it('should fail if not always called with correct args', () => {
    spy(a);
    spy(a, b, c);

    expect(() => expect(spy).toBeAlwaysCalledWith(a, b, c)).toThrow();
  });
});

describe('spy.not.toBeAlwaysCalledWith', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if not always called with correct args', () => {
    spy(a);
    spy(a, b, c);

    expect(spy).not.toBeAlwaysCalledWith(a, b, c);
  });

  it('should fail if always called with correct args', () => {
    spy(a, b, c);

    expect(() => expect(spy).not.toBeAlwaysCalledWith(a, b, c)).toThrow();
  });
});
