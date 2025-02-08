Array.prototype.findindex = function(callback) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    // const arr = Object(this);
    // const len = arr.length >>> 0;
    console.log(this)
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };
const myarr = [2,3,4,5,6,7,8];
console.log(myarr.findindex((x)=>x>6))