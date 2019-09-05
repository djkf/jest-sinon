import sinon from "sinon";
import toBeCalledOn from ".";

expect.extend(toBeCalledOn);

describe("spy.toBeCalledOn", () => {
  const spy = sinon.spy();
  const obj = {};

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called on", () => {
    spy.call(obj);

    expect(spy).toBeCalledOn(obj);
  });

  it("should fail if not called on", () => {
    spy();

    expect(() => expect(spy).toBeCalledOn(obj)).toThrow();
  });
});

describe("spy.not.toBeCalledOn", () => {
  const spy = sinon.spy();
  const obj = {};

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if not called on", () => {
    spy();

    expect(spy).not.toBeCalledOn(obj);
  });

  it("should fail if called on", () => {
    spy.call(obj);

    expect(() => expect(spy).not.toBeCalledOn(obj)).toThrow();
  });
});
