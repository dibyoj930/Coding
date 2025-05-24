function memoizeOne(fn, isEqual = shallowEqual) {
    let lastThis;
    let lastArgs = null;
    let lastResult;
  
    return function (...args) {
      if (lastArgs !== null &&
          lastThis === this &&
          isEqual(args, lastArgs)
      ) {
        return lastResult;
      }
  
      lastThis = this;
      lastArgs = args;
      lastResult = fn.apply(this, args);
      return lastResult;
    };
  }
  
  function shallowEqual(newArgs, prevArgs) {
    if (newArgs.length !== prevArgs.length) return false;
    for (let i = 0; i < newArgs.length; i++) {
      if (newArgs[i] !== prevArgs[i]) return false;
    }
    return true;
  }
  