const arr = [2,3,4,5,6,8,9,12,23,43,45];
const second = (arr)=>{
    let max=-Infinity;
    let sec=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            sec=max;
            max=arr[i]
        }else if(arr[i]<max&&sec<arr[i]){
            sec=arr[i]
        }
    }
    return sec;
}
console.log(second(arr))

const arr2=[2,2,3,3,4,5,4,54,54,3,4,5];
console.log("removed duplicates->",[...new Set(arr2)])