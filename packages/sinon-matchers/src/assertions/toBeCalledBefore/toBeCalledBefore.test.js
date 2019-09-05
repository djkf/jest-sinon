import sinon from "sinon";
import toBeCalledBefore from ".";

expect.extend({ toBeCalledBefore });

describe("spy.toBeCalledBefore", () => {
  const beforeSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it("should pass if spies are called in order", () => {
    beforeSpy();
    afterSpy();

    expect(beforeSpy).toBeCalledBefore(afterSpy);
  });

  it("should fail if spies are called out of order", () => {
    afterSpy();
    beforeSpy();

    expect(() => expect(beforeSpy).toBeCalledBefore(afterSpy)).toThrow();
  });
});

describe("spy.not.toBeCalledBefore", () => {
  const beforeSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it("should pass if spies are called out of order", () => {
    afterSpy();
    beforeSpy();

    expect(beforeSpy).not.toBeCalledBefore(afterSpy);
  });

  it("should fail if spies are called in order", () => {
    beforeSpy();
    afterSpy();

    expect(() => expect(beforeSpy).not.toBeCalledBefore(afterSpy)).toThrow();
  });
});
