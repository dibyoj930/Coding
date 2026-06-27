function isPossible(N, arr) {
    // code here
    let res=arr.reduce((acc,sum)=>acc+sum,0);
    return res%3===0?1:0;
}

// Input: N = 3
// arr = {40, 50, 90}