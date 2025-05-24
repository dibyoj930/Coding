//merge 2 deeply nested objects
const _ = require('lodash');
const user = {
    name: "David",
    phone: 122345678,
    location: {
      city: "Camden",
      country: "UK"
    }
  };
  const updates = {
    name: "David",
    phone: 123456789,
    location: {
      city: "Smithfield"
    }
  };
//1st method->
//spread operator
const newobject = {...user,...updates}
console.log(newobject)
//country property lost
//so need something else even object.assign will not work here.
//need lodash merge.
console.log(_.merge(user,updates))