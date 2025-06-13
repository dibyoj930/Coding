function customValueOf(obj) {
    if (typeof obj.valueOf === "function") {
      return obj.valueOf();
    }
    // Add custom logic to determine the primitive value
    return `A person named ${obj.name}`;
  }
  
  
  // Define a custom object
  const customObject = {
    name: "John",
    age: 30,
    valueOf: function () {
      return `${this.name}`;
    },
  };
  
  
  // Using the customValueOf() function 
  
  const primitiveValue = customValueOf(customObject);
  
  console.log(primitiveValue); // Output: "John"
  
  const anotherObject = {
    name: "Alice",
  };
  
  
  
  const primitiveValueForAnotherObject = customValueOf(anotherObject);
  
  console.log(primitiveValueForAnotherObject);