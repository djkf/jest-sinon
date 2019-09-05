import sinon from "sinon";
import toBeCalledOnce from ".";

expect.extend(toBeCalledOnce);

describe("spy.toBeCalledOnce", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called the correct number of times", () => {
    spy();

    expect(spy).toBeCalledOnce();
  });

  it("should fail if called the incorrect number of times", () => {
    spy();
    spy();

    expect(() => expect(spy).toBeCalledOnce()).toThrow();
  });
});

describe("spy.not.toBeCalledOnce", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called the incorrect number of times", () => {
    spy();
    spy();

    expect(spy).not.toBeCalledOnce();
  });

  it("should fail if called the correct number of times", () => {
    spy();

    expect(() => expect(spy).not.toBeCalledOnce()).toThrow();
  });
});
