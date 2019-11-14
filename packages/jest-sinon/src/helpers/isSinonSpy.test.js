import sinon from "sinon";

import isSinonSpy from "./isSinonSpy";

describe("isSinonSpy", () => {
  it("should return true when passed a sinon spy", () => {
    const sinonSpy = sinon.spy();
    expect(isSinonSpy(sinonSpy)).toEqual(true);
  });

  it("should return false when passed a jest spy", () => {
    const jestSpy = jest.fn();

    expect(isSinonSpy(jestSpy)).toEqual(false);
  });

  it("should return false when passed neither a sinon or jest spy", () => {
    expect(isSinonSpy(() => {})).toEqual(false);
  });
});
