import sinon from 'sinon';
import toBeCalledWithMatch from '.';

expect.extend({ toBeCalledWithMatch });

const foo = {
  bar: 42,
  xy: 'zzy'
};

describe('spy.toBeCalledWithMatch', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if called with matching argument', () => {
    spy(foo);

    expect(spy).toBeCalledWithMatch({ bar: 42 });
  });

  it('should fail if not called with matching argument', () => {
    spy(foo);

    expect(() => expect(spy).toBeCalledWithMatch({ ham: 44 })).toThrow();
  });
});

describe('spy.not.toBeCalledWithMatch', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if not called with matching argument', () => {
    spy(foo);

    expect(spy).not.toBeCalledWithMatch({ vet: 7 });
  });

  it('should fail if called with matching argument', () => {
    spy(foo);

    expect(() => expect(spy).not.toBeCalledWithMatch({ bar: 42 })).toThrow();
  });
});
