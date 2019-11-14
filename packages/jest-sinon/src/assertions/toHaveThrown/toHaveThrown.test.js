import sinon from "sinon";
import toHaveThrown from ".";

expect.extend({ toHaveThrown });

describe("spy.toHaveThrown", () => {
  const throwSpy = sinon.spy(() => {
    throw new Error();
  });
  const nonThrowSpy = sinon.spy(() => {});

  beforeEach(() => {
    throwSpy.resetHistory();
    nonThrowSpy.resetHistory();
  });

  it("should pass if error thrown", () => {
    try {
      throwSpy();
    } catch (e) {
      expect(throwSpy).toHaveThrown();
    }
  });

  it("should fail if error is not thrown", () => {
    nonThrowSpy();

    expect(() => expect(nonThrowSpy).toHaveThrown()).toThrow();
  });
});

describe("spy.not.toHaveThrown", () => {
  const throwSpy = sinon.spy(() => {
    throw Error();
  });
  const nonThrowSpy = sinon.spy(() => {});

  beforeEach(() => {
    throwSpy.resetHistory();
    nonThrowSpy.resetHistory();
  });

  it("should pass if error is not thrown", () => {
    nonThrowSpy();

    expect(nonThrowSpy).not.toHaveThrown();
  });

  it("should fail if error thrown", () => {
    try {
      throwSpy();
    } catch (e) {
      expect(() => expect(throwSpy).not.toHaveThrown()).toThrow();
    }
  });
});

describe("jestSpy.toHaveThrown", () => {
  it("should pass if obj returns", () => {
    const jestSpy = jest.fn(() => {
      throw Error();
    });

    try {
      jestSpy();
    } catch (e) {
      expect(jestSpy).toHaveThrown();
    }
  });
});

describe("jestSpy.not.toHaveThrown", () => {
  it("should pass if obj doesn't return", () => {
    const jestSpy = jest.fn(() => {});

    jestSpy();

    expect(jestSpy).not.toHaveThrown();
  });
});

describe("fn.toHaveThrown", () => {
  it("should pass if error thrown", () => {
    expect(() => {
      throw new Error("Error thrown");
    }).toHaveThrown("Error thrown");
  });
});

describe("fn.not.toHaveThrown", () => {
  it("should fail if error not thrown", () => {
    expect(() => {}).not.toHaveThrown("Error thrown");
  });
});
