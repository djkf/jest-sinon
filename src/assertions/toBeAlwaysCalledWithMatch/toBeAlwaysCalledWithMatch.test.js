import sinon from 'sinon';

const foo = {
  bar: 42,
  xy: 'zzy'
};

const bar = {
  foo: 24,
  zzy: 'yx'
};

describe('spy.toBeAlwaysCalledWithMatch', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if always called with matching argument', () => {
    spy(foo);
    spy(foo);

    expect(spy).toBeAlwaysCalledWithMatch({ bar: 42 });
  });

  it('should fail if not always called with matching argument', () => {
    spy(foo);
    spy(bar);

    expect(() => expect(spy).toBeAlwaysCalledWithMatch({ bar: 42 })).toThrow();
  });
});

describe('spy.not.toBeAlwaysCalledWithMatch', () => {
  const spy = sinon.spy();

  beforeEach(() => {
    spy.resetHistory();
  });

  it('should pass if not called with matching argument', () => {
    spy(foo);
    spy(bar);

    expect(spy).not.toBeAlwaysCalledWithMatch({ vet: 7 });
  });

  it('should fail if called with matching argument', () => {
    spy(foo);

    expect(() =>
      expect(spy).not.toBeAlwaysCalledWithMatch({ bar: 42 })
    ).toThrow();
  });
});
