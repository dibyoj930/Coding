// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.
// Input: text = "nlaebolko"
// Output: 1
// Input: text = "loonbalxballpoon"
// Output: 2

const Foundmax=(text)=>{
    let map={};
    let ans=0;
    for(let i of text){
        map[i]=(map[i]||0)+1;
    }
    console.log("map->",map)
    while(map['b']>0&&map['a']>0&&map['l']>1&&map['o']>1&&map['n']>0){
     ans++;
     map['b']--;
     map['a']--;
     map['l']-=2;
     map['o']-=2;
     map['n']--;
    }
    return ans;
}
console.log(Foundmax("loonbalxballpoon"))