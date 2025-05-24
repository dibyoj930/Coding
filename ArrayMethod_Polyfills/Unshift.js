function customUnshift(arr, ...elements) {
    const newArr = [...elements, ...arr];
    arr.length = 0; // Clear the original array
    arr.push(...newArr); // Push elements from the new array to the original array
    return arr.length; // Return the new length of the original array
  }


  
