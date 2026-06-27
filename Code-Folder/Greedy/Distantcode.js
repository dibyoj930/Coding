// In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
// Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.
// Input: barcodes = [1,1,1,2,2,2]
// Output: [2,1,2,1,2,1]
// barcodes = [1,1,1,1,2,2,3,3]
// Output: [1,3,1,3,1,2,1,2]
var rearrangeBarcodes = function(barcodes) {
    let res = new Array(barcodes.length);
    let map=new Map();

    for(let i of barcodes){
        if(!map.has(i)){
            map.set(i,1);
        }else{
            map.set(i,map.get(i)+1)
        }
    }
    let arr=[...map].sort((a,b)=>b[1]-a[1]);
    let f=0;
    for(let [key,val] of arr){
      
        for(let j=0;j<val;j++){
            res[f]=key;
            f+=2;
            if(f>=barcodes.length){
                f=1;
            }
        }
    }
    return res;
};
console.log("--->",DistantCodes([1,1,1,1,2,2,3,3]))