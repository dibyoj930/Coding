// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.
// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:
// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.
// Return the number of rods that have all three colors of rings on them.
const NumberOfRods = (str) => {
    let map = new Map();
    let ans = 0;
    for (let i = 0; i < str.length - 1; i += 2) {
      let rings = str[i];
      let rods = str[i + 1];
      if (!map.has(rods)) {
        map.set(rods, new Set());
      } else {
        map.get(rods).add(rings);
      }
      // console.log(map);
    }
    console.log(map);
    for (let [key, val] of map) {
      if (val.size == 3) {
        ans++;
      }
    }
    return ans;
  };
  
  const res = NumberOfRods("B0R0G0R9R0B0G0");
  console.log("res-->", res);