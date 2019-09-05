import sinon from "sinon";
import toBeCalledOnceWith from ".";

expect.extend(toBeCalledOnceWith);

const [a, b, c] = ["a", "b", "c"];

describe("spy.toBeCalledOnceWith", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called with correct args once", () => {
    spy(a, b, c);

    expect(spy).toBeCalledOnceWith(a, b, c);
  });

  it("should fail if called with correct args more than once", () => {
    spy(a, b, c);
    spy(a, b, c);

    expect(() => expect(spy).toBeCalledOnceWith(a, b, c)).toThrow();
  });
});

describe("spy.not.toBeCalledOnceWith", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called with correct args more than once", () => {
    spy(a, b, c);
    spy(a, b, c);

    expect(spy).not.toBeCalledOnceWith(a, b, c);
  });

  it("should fail if called with correct args once", () => {
    spy(a, b, c);

    expect(() => expect(spy).not.toBeCalledOnceWith(a, b, c)).toThrow();
  });
});
