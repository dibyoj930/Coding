// Implement Classnames
// Implement the classNames function, which takes multiple arguments and returns a string of space-separated class names. The rules for processing these arguments are:
// Strings and valid truthy values should be included in the output.
// Objects should include keys where the corresponding value is true.
// Arrays should be recursively flattened and processed according to the rules above.
// Falsy values (null, false, undefined, 0, NaN, "") should be ignored.
// The final string should not have leading or trailing whitespace.
export default function classNames(...args) {
    const classes = [];
  
    args.forEach((arg) => {
      // Ignore falsey values.
      if (!arg) {
        return;
      }
  
      const argType = typeof arg;
  
      // Handle string and numbers.
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
        return;
      }
  
      // Handle arrays.
      if (Array.isArray(arg)) {
        classes.push(classNames(...arg));
        return;
      }
  
      // Handle objects.
      if (argType === 'object') {
        for (const key in arg) {
          // Only process non-inherited keys.
          if (Object.hasOwn(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
        return;
      }
    });
  
    return classes.join(' ');
  }
console.log(classNames('foo', 'bar')); // 'foo bar'
console.log(classNames('foo', { bar: true })); // 'foo bar'
console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
console.log(classNames({ 'foo-bar': false })); // ''
console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
console.log(classNames(
  'foo',
  { bar: true, duck: false },
  'baz',
  { quux: true }
)); // 'foo bar baz quux'
console.log(classNames(null, false, 'bar', undefined, { baz: null }, '')); 