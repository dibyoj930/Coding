var frequencySort = function(s) {
    let map=new Map();
    for(let i of s){
        if(map.has(i)){
            map.set(i,map.get(i)+1);
        }else{
            map.set(i,1);
        }
    }
    let arr=[...map].sort((a,b)=>b[1]-a[1]);
    let str="";
    for(let [key,val] of arr){
        str+=key.repeat(val);
    }
    return str;
};
//tree->"eert"
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
    let arr=[...map];
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
    console.log(res)
};
rearrangeBarcodes([1,1,1,2,2,2])