function maxsum(){
    let curr_sum=0;
        let res=0;
        let temp=0;
        for(let i=0;i<arr.length;i++){
            temp+=i*arr[i];
        }
        for(let i=0;i<arr.length;i++){
            curr_sum+=arr[i];
        }
        res=temp;
        for(let i=1;i<arr.length;i++){
            temp=temp-curr_sum+arr[i-1]*arr.length;
            res=Math.max(temp,res);
        }
        return res;
}
// Input: arr[] = [8, 3, 1, 2]
// Output: 29