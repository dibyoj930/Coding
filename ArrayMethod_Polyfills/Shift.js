function customShift(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Argument must be an array");
    }
    if (arr.length === 0) {
      return undefined; // Return undefined for an empty array
    }
    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr.length--;
    return firstElement;
  }