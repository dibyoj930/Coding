// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.
// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true

const HandStraight=(arr,grp)=>{
    let map=new Map();
    arr.sort((a,b)=>a-b)
    for(let i of arr){
        map[i]?map[i]++:map[i]=1;
    }
    for(let i=0;i<arr.length;i++){
        let cnt=0;
        if(map[arr[i]]==0)continue;
        while(cnt<grp){
            if(!map[arr[i]+cnt])return false;
            map[arr[i]+cnt]--;
            cnt++;
        }
    }
    return true;
}


console.log("---Hanofstraight---",HandStraight([1,2,3,6,2,3,4,7,8],3))