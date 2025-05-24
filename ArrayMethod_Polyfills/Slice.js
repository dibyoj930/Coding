function customSlice(arr, start, end) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Argument must be an array");
    }
    const length = arr.length;
    let startIndex = start || 0;
    let endIndex = end || length;
    // Handle negative indices
    if (startIndex < 0) {
      startIndex = Math.max(length + startIndex, 0);
    }
    if (endIndex < 0) {
      endIndex = Math.max(length + endIndex, 0);
    }
    const result = [];
    for (let i = startIndex; i < endIndex && i < length; i++) {
      result.push(arr[i]);
    }
    return result;
  }