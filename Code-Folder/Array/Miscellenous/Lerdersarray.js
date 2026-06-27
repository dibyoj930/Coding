function leaders(a) {
    // code here
    let max=-Infinity;
    let ans=[];
    for(let i=a.length-1;i>=0;i--){
        if(a[i]>=max){
            max=a[i];
            ans.push(a[i]);
        }
    }
    return ans.reverse();
}
// Input: arr = [16, 17, 4, 3, 5, 2]
// Output: [17, 5, 2] Tc-> O(n)