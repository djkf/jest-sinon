import sinon from "sinon";
import toHaveCallCount from ".";

expect.extend({ toHaveCallCount });

describe("spy.toHaveCallCount", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called the correct number of times", () => {
    spy();
    spy();

    expect(spy).toHaveCallCount(2);
  });

  it("should fail if called the incorrect number of times", () => {
    spy();
    spy();

    expect(() => expect(spy).toHaveCallCount(3)).toThrow();
  });
});

describe("spy.not.toHaveCallCount", () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it("should pass if called the incorrect number of times", () => {
    spy();
    spy();

    expect(spy).not.toHaveCallCount(1);
  });

  it("should fail if called the correct number of times", () => {
    spy();
    spy();

    expect(() => expect(spy).not.toHaveCallCount(2)).toThrow();
  });
});
