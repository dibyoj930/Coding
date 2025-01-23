// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// jewels = "aA", stones = "aAAbbbb"->3

const Takejewels=(str1,str2)=>{
    let set=new Set(str1);
    let ans=0;
    for(let i=0;i<str2.length;i++){
        if(set.has(str2[i])){
            ans++;
        }
    }
    return ans;
}

console.log("jewels-->",Takejewels("aA","aAAbbbb"))