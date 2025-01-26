console.log("---find maximum chain length----")
//here the concept is baa]sically need to sort the array based on second values and
//need to check if first elements second value is less than second elements first value that's it.
//if so increase the length of the chain
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=>a[1]-b[1]);
    let chain=1,prev=pairs[0];
    for(let i=1;i<pairs.length;i++){
        const [prevs,preve]=prev;
        const [currs,curre]=pairs[i];
        if(preve<currs){
            prev=pairs[i];
            chain++;
        }
    }
    return chain;

};

console.log(findLongestChain([[1,2],[7,8],[4,5]]))
console.log("----make array zero by subtracting equal amounts----");
