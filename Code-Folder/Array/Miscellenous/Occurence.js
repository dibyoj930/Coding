class Solution {
    find(arr, x) {
        // code here
        let f=-1,s=-1;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==x){
                f=i;
            }
        }
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i]==x){
                s=i;
            }
        }
        let ans=[];
        ans.push(s);
        ans.push(f);
        return ans;
    }
}