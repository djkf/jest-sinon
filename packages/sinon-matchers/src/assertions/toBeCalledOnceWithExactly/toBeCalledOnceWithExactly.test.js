import sinon from "sinon";
import toBeCalledOnceWithExactly from "./";

expect.extend(toBeCalledOnceWithExactly);

const [a, b, c] = ["a", "b", "c"];

describe("spy.toBeCalledOnceWithExactly", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called with correct args once", () => {
    spy(a, b);

    expect(spy).toBeCalledOnceWithExactly(a, b);
  });

  it("should fail if not called with correct args", () => {
    spy(a, b, c);

    expect(() => expect(spy).toBeCalledOnceWithExactly(a, b)).toThrow();
  });

  it("should fail if called more than once", () => {
    spy(a, b);
    spy(a, b);

    expect(() => expect(spy).toBeCalledOnceWithExactly(a, b)).toThrow();
  });
});

describe("spy.not.toBeCalledOnceWithExactly", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if not called once with with correct args", () => {
    spy(a, b, c);

    expect(spy).not.toBeCalledOnceWithExactly(a, b);
  });

  it("should fail if called with correct args once", () => {
    spy(a, b);

    expect(() => expect(spy).not.toBeCalledOnceWithExactly(a, b)).toThrow();
  });
});
