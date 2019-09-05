import sinon from "sinon";
import toBeCalled from ".";

expect.extend({ toBeCalled });

["stub", "mock", "spy"].forEach(type => {
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
