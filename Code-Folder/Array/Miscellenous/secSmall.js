function minAnd2ndMin(arr) {
    // code here
    let small=Infinity;
    let sec=Infinity;
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            sec=small;
            small=arr[i]
        }
        if(arr[i]>small&&arr[i]<sec){
            sec=arr[i];
        }
    }
    if(small==Infinity||sec==Infinity){
        arr2.push(-1);
    }else{
        
    arr2.push(small);
    arr2.push(sec);
    }
    return arr2;
}
// Input: arr[] = [2, 4, 3, 5, 6]
// Output: 2 3 