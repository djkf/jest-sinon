import sinon from 'sinon';

describe(`jest.fn().toBeCalled`, () => {
  it(`should pass if passed a called jest.fn()`, () => {
    const jestSpy = jest.fn();

    jestSpy();

    expect(jestSpy).toBeCalled();
  });
});

describe(`jest.fn().not.toBeCalled`, () => {
  it(`should pass if passed a called jest.fn()`, () => {
    const jestSpy = jest.fn();

    expect(jestSpy).not.toBeCalled();
  });
});
['stub', 'mock', 'spy'].forEach((type) => {
  describe(`${type}.toBeCalled`, () => {
    const spy = sinon[type]();

    beforeEach(() => {
      spy.resetHistory();
    });

    it(`should pass if passed a called ${type}`, () => {
      spy();

      expect(spy).toBeCalled();
    });

    it(`should fail if passed an uncalled ${type}`, () => {
      expect(() => expect(spy).toBeCalled()).toThrow();
    });
  });

  describe(`${type}.not.toBeCalled`, () => {
    const spy = sinon[type]();

    beforeEach(() => {
      spy.resetHistory();
    });

    it(`should pass if passed an uncalled ${type}`, () => {
      expect(spy).not.toBeCalled();
    });

    it(`should fail if passed a called ${type}`, () => {
      spy();

      expect(() => expect(spy).not.toBeCalled()).toThrow();
    });
  });
});
