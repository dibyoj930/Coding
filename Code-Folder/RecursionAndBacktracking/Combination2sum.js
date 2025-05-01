function Combination(target,arr){

    let ans=[];
    arr.sort((a,b)=>a-b);
    function Recursion(start,current,target){
        if(target==0){
            ans.push([...current])
            return;
        }
        for(let i=start;i<arr.length;i++){
            if(i>start&&arr[i]==arr[i-1])continue;
            if(arr[i]>target)break;
            current.push(arr[i]);
            Recursion(i+1,current,target-arr[i])
            current.pop()

        }

    }
    Recursion(0,[],target)
    return ans;
}
console.log(Combination( 8,[10,1,2,7,6,1,5]))
console.log(Combination( 5,[2,5,2,1,2]))