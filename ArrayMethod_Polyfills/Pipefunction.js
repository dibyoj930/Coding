const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

function pipe(...funcs) {
  return function(arg) {
    return funcs.reduce((result, func) => {
      // Use .call() to invoke func with the correct argument
      return func.call(this, result);
    }, arg);  // Start with the initial argument
  };
}
// function pipe(funcs) {
//     return function(arg) {
//       let lastResult = arg;  // save the initial argument in lastResult
//       for (const f of funcs) { // loop through the functions
//         lastResult = f(lastResult);  // apply each function to lastResult
//       }
//       return lastResult;
//     };
//   }

const res = pipe(plus(4), subtract(2), divide(2)); // Functions pre-applied with values

console.log(res(16));  // Output should be 9
