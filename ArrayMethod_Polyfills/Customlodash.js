function get(obj, path, defaultValue) {
    return path.split(".").reduce((acc, key) => acc?.[key], obj) || defaultValue;
  }
  const data = { a: { b: { c: 42 } } };
console.log(get(data, "a.b.c", "default")); // Output: 42
console.log(get(data, "a.x.c", "default")); // Output: "default"