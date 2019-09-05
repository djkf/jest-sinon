import sinon from "sinon";
import toBeAlwaysCalledOn from ".";

expect.extend({ toBeAlwaysCalledOn });

describe("spy.toBeAlwaysCalledOn", () => {
  const spy = sinon.spy();
  const obj = {};

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if always called on", () => {
    spy.call(obj);

    expect(spy).toBeAlwaysCalledOn(obj);
  });

  it("should fail if not always called on", () => {
    spy();
    spy.call(obj);

    expect(() => expect(spy).toBeAlwaysCalledOn(obj)).toThrow();
  });
});

describe("spy.not.toBeAlwaysCalledOn", () => {
  const spy = sinon.spy();
  const obj = {};

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if not called on", () => {
    spy();
    spy.call(obj);

    expect(spy).not.toBeAlwaysCalledOn(obj);
  });

  it("should fail if called on", () => {
    spy.call(obj);

    expect(() => expect(spy).not.toBeAlwaysCalledOn(obj)).toThrow();
  });
});
