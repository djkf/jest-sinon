import sinon from "sinon";
import toBeAlwaysCalledWithNew from "./";

expect.extend(toBeAlwaysCalledWithNew);

describe("spy.toBeAlwaysCalledWithNew", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if always called with new", () => {
    new spy();
    new spy();

    expect(spy).toBeAlwaysCalledWithNew();
  });

  it("should fail if not always called with new", () => {
    new spy();
    spy();

    expect(() => expect(spy).toBeAlwaysCalledWithNew()).toThrow();
  });
});

describe("spy.not.toBeAlwaysCalledWithNew", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if not always called with new", () => {
    spy();
    new spy();

    expect(spy).not.toBeAlwaysCalledWithNew();
  });

  it("should fail if always called with new", () => {
    new spy();
    new spy();

    expect(() => expect(spy).not.toBeAlwaysCalledWithNew()).toThrow();
  });
});
