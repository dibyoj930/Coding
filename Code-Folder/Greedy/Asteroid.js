//  We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Input: asteroids = [10,2,-5]
// Output: [10]

const Asteroids = (arr) => {
  let s = [];
  for (let i of arr) {
    if (i > 0) {
      s.push(i);
    } else {
      if (
        s.length > 0 &&
        s[s.length - 1] > 0 &&
        s[s.length - 1] < Math.abs(i)
      ) {
        s.pop();
      }
      if (s.length == 0 || s[s.length - 1] < 0) {
        s.push(i);
      } else if (s[s.length - 1] == -i) {
        s.pop();
      }
    }
  }
  return s;
};
const res = Asteroids([10, 2, -5]);
console.log(res);