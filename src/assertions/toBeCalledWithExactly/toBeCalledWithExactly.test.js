import sinon from "sinon";
import toBeCalledWithExactly from ".";

expect.extend({ toBeCalledWithExactly });

const [a, b, c] = ["a", "b", "c"];

describe("spy.toBeCalledWithExactly", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called with correct args", () => {
    spy(a, b);

    expect(spy).toBeCalledWithExactly(a, b);
  });

  it("should fail if not called with correct args", () => {
    spy(a, b, c);

    expect(() => expect(spy).toBeCalledWithExactly(a, b)).toThrow();
  });
});

describe("spy.not.toBeCalledWithExactly", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if not called with correct args", () => {
    spy(a, b, c);

    expect(spy).not.toBeCalledWithExactly(a, b);
  });

  it("should fail if called with correct args", () => {
    spy(a, b);

    expect(() => expect(spy).not.toBeCalledWithExactly(a, b)).toThrow();
  });
});
