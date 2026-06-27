function   countTriangles(arr) {
    // code here
    arr.sort((a,b)=>a-b);
   
    let c=0;
    for(let i=arr.length-1;i>=0;i--){
       let l=0,  r=i-1;
        while(l<r){
            if(arr[i]<arr[l]+arr[r]){
                c+=(r-l);
                r--;
            }else{
                l++;
            }
        }
    }
    return c;
}
// Input: arr[] = [4, 6, 3, 7]
// Output: 3