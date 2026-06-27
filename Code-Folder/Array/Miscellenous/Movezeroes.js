class Solution {
    pushZerosToEnd(arr) {
        // code here
        let j=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==0){
                arr[j]=arr[i];
                j++;
            }
        }
        for(let k=j;k<arr.length;k++){
            arr[k]=0;
        }
        return arr;
    }
}
// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]