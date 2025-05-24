function customPop(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Argument must be an array");
    }
    const len = arr.length;
    if (len === 0) {
      return undefined;
    }
    const lastElement = arr[len - 1];
    arr.length = len - 1;
    return lastElement;
  }