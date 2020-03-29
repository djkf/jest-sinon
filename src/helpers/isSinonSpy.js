export default (potentialSpy) => {
  return (
    typeof potentialSpy.getCall === 'function' &&
    typeof potentialSpy.alwaysCalledWithExactly === 'function' &&
    typeof potentialSpy.alwaysReturned === 'function'
  );
};
