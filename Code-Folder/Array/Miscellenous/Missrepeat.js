class Solution {
    // Function to find two repeating elements in an array of size n.
    findTwoElement(arr) {
        // code here
        let a,b;
        for(let i=0;i<arr.length;i++){
            if(arr[Math.abs(arr[i])-1]<0){
                a=Math.abs(arr[i]);
            }else{
                arr[Math.abs(arr[i])-1]=-arr[Math.abs(arr[i])-1];
            }
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i]>0){
                b=i+1;
                break;
            }
        }
        let ans=[];
        ans.push(a);
        ans.push(b);
        return ans;
    }
}
// Input: arr[] = [4, 3, 6, 2, 1, 1] O(1)
// Output: [1, 5]