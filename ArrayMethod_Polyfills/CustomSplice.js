//implementation of splice function custom
if (!Array.prototype.splice) {
  Array.prototype.splice = function(start, deleteCount, ...itemsToAdd) {
    // 'this' refers to the array we're operating on
    const arr = this;
    const len = arr.length;

    // Convert 'start' to an integer if it's not
    start = start || 0;
    if (start < 0) {
      start = Math.max(0, len + start); // Handle negative start
    }

    // Handle default 'deleteCount' as the remaining elements in the array
    deleteCount = Math.min(deleteCount, arr.length - start);
    // Create an array to store the removed items
    const removedItems = [];

    // Loop through the array and remove elements based on deleteCount
    for (let i = 0; i < deleteCount; i++) {
      if (start + i < len) {
        removedItems.push(arr[start + i]);
      }
    }

    // Shift elements to the left to fill the deleted spot
    for (let i = start + deleteCount; i < len; i++) {
      arr[i - deleteCount] = arr[i];
    }

    // Set the new length of the array
    arr.length = arr.length - deleteCount;

    // Add the new items to the array
    for (let i = 0; i < itemsToAdd.length; i++) {
      arr.splice(start + i, 0, itemsToAdd[i]);
    }

    // Return the removed elements as a new array
    return removedItems;
  };
}


const fruits = ["apple", "banana", "cherry", "date"];
const deleted = fruits.splice(2, 1, "grape","Sausage");
console.log(fruits); // Output: ["apple", "banana", "grape", "date"]
console.log(deleted); // Output: ["cherry"]