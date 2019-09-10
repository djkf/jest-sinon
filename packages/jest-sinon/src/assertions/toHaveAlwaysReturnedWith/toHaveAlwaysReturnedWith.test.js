/* eslint-disable no-param-reassign, no-plusplus */
import sinon from "sinon";
import toHaveAlwaysReturnedWith from ".";

expect.extend({ toHaveAlwaysReturnedWith });

const impureFn = () => new Date();
const pureFn = () => true;

describe("spy.toHaveAlwaysReturnedWith", () => {
  const impureSpy = sinon.spy(impureFn);
  const pureSpy = sinon.spy(pureFn);

  beforeEach(() => {
    impureSpy.resetHistory();
    pureSpy.resetHistory();
  });

  it("should pass if correct obj always returned", () => {
    pureSpy();
    pureSpy();

    expect(pureSpy).toHaveAlwaysReturnedWith(true);
  });

  it("should fail if correct obj not returned", () => {
    pureSpy();
    pureSpy();

    expect(() => expect(impureSpy).toHaveAlwaysReturnedWith(true)).toThrow();
  });
});

describe("spy.not.toHaveAlwaysReturnedWith", () => {
  const impureSpy = sinon.spy(impureFn);
  const pureSpy = sinon.spy(pureFn);

  beforeEach(() => {
    impureSpy.resetHistory();
    pureSpy.resetHistory();
  });

  it("should pass if correct obj not returned", () => {
    impureSpy();
    impureSpy();

    expect(impureSpy).not.toHaveAlwaysReturnedWith(true);
  });

  it("should fail if correct obj returned", () => {
    pureSpy();
    pureSpy();

    expect(() => expect(pureSpy).not.toHaveAlwaysReturnedWith(true)).toThrow();
  });
});
