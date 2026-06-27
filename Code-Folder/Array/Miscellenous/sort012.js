function  sort012(arr) {
    // your code here
    let mid=0,low=0,high=arr.length-1;
    while(mid<=high){
     if(arr[mid]==0){
        [arr[mid],arr[low]]=[arr[low],arr[mid]];
        mid++;
        low++;
    }
    else if(arr[mid]==1){
        mid++;
    }
    else{
        [arr[mid],arr[high]]=[arr[high],arr[mid]];
        high--;
    }   
    }
    return arr;
    
}
// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
