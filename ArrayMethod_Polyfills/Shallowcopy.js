const shallowCopy = (obj) => {
    if (Array.isArray(obj)) {
      return [...obj];
    } else if (obj && typeof obj === 'object') {
      return { ...obj };
    } else {
      return obj; // primitives don't need copying
    }
  };
  const originalObj = { a: 1, b: { c: 2 } };
  const copyObj = shallowCopy(originalObj);
  
  copyObj.a = 100;
  copyObj.b.c = 999;
  
  console.log(originalObj); // { a: 1, b: { c: 999 } }
  console.log(copyObj);     // { a: 100, b: { c: 999 } }
    