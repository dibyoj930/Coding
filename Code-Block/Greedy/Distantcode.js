// In a warehouse, there is a row of barcodes, where the ith barcode is barcodes[i].
// Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.
// Input: barcodes = [1,1,1,2,2,2]
// Output: [2,1,2,1,2,1]
// barcodes = [1,1,1,1,2,2,3,3]
// Output: [1,3,1,3,1,2,1,2]

const DistantCodes=(barcodes)=>{
    let mymap=new Map();
    const seq=[];
    for(let i=0;i<barcodes.length;i++){
        let value=barcodes[i];
        mymap.set(value,(mymap.get(value)||0)+1)
    }
    const mycol = Array.from(mymap.entries()).sort((a,b)=>b[1]-a[1]);
    console.log("****",mycol,mymap)
    let pointer=0;
    for(let i=0;i<mycol.length;i++){
        let [num,occur]=mycol[i];
        while(occur){
           seq[pointer]=num;
           occur--;
           pointer+=2;
            if(pointer>=barcodes.length)pointer=1;
        }
       
    }
    return seq;
}
console.log("--->",DistantCodes([1,1,1,1,2,2,3,3]))