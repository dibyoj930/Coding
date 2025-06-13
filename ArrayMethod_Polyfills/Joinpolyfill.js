function customJoin(arr, separator = ",") {
    if (!Array.isArray(arr)) {
      throw new TypeError("First argument must be an array");
    }
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (i > 0) {
        result += separator;
      }
      if (arr[i] !== undefined && arr[i] !== null) {
        result += arr[i];
      }
    }
    return result;
  }

  const fruits = ["apple", "banana", "cherry", "date"];
  const result1 = customJoin(fruits);
  const result2 = customJoin(fruits, " - ")
  console.log(result1,result2)