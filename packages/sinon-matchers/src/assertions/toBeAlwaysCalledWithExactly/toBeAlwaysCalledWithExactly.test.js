import sinon from "sinon";
import toBeAlwaysCalledWithExactly from ".";

expect.extend({ toBeAlwaysCalledWithExactly });

const [a, b, c] = ["a", "b", "c"];

describe("spy.toBeAlwaysCalledWithExactly", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if always called with correct args", () => {
    spy(a, b);
    spy(a, b);

    expect(spy).toBeAlwaysCalledWithExactly(a, b);
  });

  it("should fail if not always called with correct args", () => {
    spy(a, b);
    spy(a, b, c);

    expect(() => expect(spy).toBeAlwaysCalledWithExactly(a, b)).toThrow();
  });
});

describe("spy.not.toBeAlwaysCalledWithExactly", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if not always called with correct args", () => {
    spy(a, b);
    spy(a, b, c);

    expect(spy).not.toBeAlwaysCalledWithExactly(a, b);
  });

  it("should fail if always called with correct args", () => {
    spy(a, b);
    spy(a, b);

    expect(() => expect(spy).not.toBeAlwaysCalledWithExactly(a, b)).toThrow();
  });
});
