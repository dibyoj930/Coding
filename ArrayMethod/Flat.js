//Recursive-->
Array.prototype.myFlat = function(){
    let newarr = []
    for(let x of this){
        if(Array.isArray(x)){
            newarr.push(...x.myFlat())
        }else{
            newarr.push(x)
        }
    }
    return newarr;
}
const arr = [1,2,3,[4,[5,6,7,[8,9,10]]]]
// console.log(arr.myFlat())
//Iterative-->
Array.prototype.myFlatItr = function(){
    let arr = [...this]
    let curr=0;
    while(curr<arr.length){
        let elem = arr[curr]
       
        if(Array.isArray(arr[curr])){
            arr.splice(curr,1,...elem)
        }else{
            curr++
        }
    }
    return arr;
}
const arr2 = [1,2,3,[4,[5,6,7,[8,9,10,[11,12,13,[14,15,16]]]]]]
console.log(arr2.myFlatItr())