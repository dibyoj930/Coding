class Solution {
    maxProduct(arr) {
        // code here
          let ans=arr[0],ma=arr[0],mi=arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]<0){
               [ma,mi]=[mi,ma]
            }
            ma=Math.max(arr[i],arr[i]*ma);
            mi=Math.min(arr[i],arr[i]*mi);
            ans=Math.max(ans,ma);
        }
        return ans;
    }
}
// Input: arr[] = [-2, 6, -3, -10, 0, 2]
// Output: 180

//brute force 
function Maxpdt(arr){
    let maxprod=-Infinity;
    for(let i=0;i<arr.length;i++){
        let pdt=1;
        for(let j=i;j<arr.length;j++){
            pdt*=arr[j];
            maxprod=Math.max(pdt,maxprod);
        }
    }
}