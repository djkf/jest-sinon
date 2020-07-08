import sinon from 'sinon';

describe('spy.toHaveReturnedWith', () => {
  const returnSpy = sinon.spy(() => true);
  const nonReturnSpy = sinon.spy(() => {});

  beforeEach(() => {
    returnSpy.resetHistory();
    nonReturnSpy.resetHistory();
  });

  it('should pass if correct obj returned', () => {
    returnSpy();

    expect(returnSpy).toHaveReturnedWith(true);
  });

  it('should fail if correct obj not returned', () => {
    nonReturnSpy();

    expect(() => expect(nonReturnSpy).toHaveReturnedWith(true)).toThrow();
  });
});

describe('spy.not.toHaveReturnedWith', () => {
  const returnSpy = sinon.spy(() => true);
  const nonReturnSpy = sinon.spy(() => {});

  beforeEach(() => {
    returnSpy.resetHistory();
    nonReturnSpy.resetHistory();
  });

  it('should pass if correct obj not returned', () => {
    nonReturnSpy();

    expect(nonReturnSpy).not.toHaveReturnedWith(true);
  });

  it('should fail if correct obj returned', () => {
    returnSpy();

    expect(() => expect(returnSpy).not.toHaveReturnedWith(true)).toThrow();
  });
});

describe('jestSpy.toHaveReturnedWith', () => {
  it('should pass if obj returns', () => {
    const jestSpy = jest.fn(() => true);

    jestSpy();

    expect(jestSpy).toHaveReturnedWith(true);
  });
});

describe('jestSpy.not.toHaveReturnedWith', () => {
  it("should pass if obj doesn't return", () => {
    const jestSpy = jest.fn(() => {});

    jestSpy();

    expect(jestSpy).not.toHaveReturnedWith(true);
  });
});
