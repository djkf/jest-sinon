import sinon from "sinon";
import toBeCalledImmediatelyAfter from "./";

expect.extend(toBeCalledImmediatelyAfter);

describe("spy.toBeCalledImmediatelyAfter", () => {
  const beforeSpy = sinon.spy();
  const mediumSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    mediumSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it("should pass if spies are called in order", () => {
    beforeSpy();
    afterSpy();

    expect(afterSpy).toBeCalledImmediatelyAfter(beforeSpy);
  });

  it("should fail if spies are called out of order", () => {
    beforeSpy();
    mediumSpy();
    afterSpy();

    expect(() =>
      expect(afterSpy).toBeCalledImmediatelyAfter(beforeSpy)
    ).toThrow();
  });
});

describe("spy.not.toBeCalledImmediatelyAfter", () => {
  const beforeSpy = sinon.spy();
  const mediumSpy = sinon.spy();
  const afterSpy = sinon.spy();

  beforeEach(() => {
    beforeSpy.resetHistory();
    mediumSpy.resetHistory();
    afterSpy.resetHistory();
  });

  it("should pass if spies are called out of order", () => {
    beforeSpy();
    mediumSpy();
    afterSpy();

    expect(afterSpy).not.toBeCalledImmediatelyAfter(beforeSpy);
  });

  it("should fail if spies are called in order", () => {
    beforeSpy();
    afterSpy();

    expect(() =>
      expect(afterSpy).not.toBeCalledImmediatelyAfter(beforeSpy)
    ).toThrow();
  });
});
