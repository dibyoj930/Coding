function longestSubstring(s, k) {
    if(s.length<k)return 0;
    let map={};
    for(let i=0;i<s.length;i++){
        map[s[i]]=(map[s[i]]||0)+1;
    }
    for(let i=0; i<s.length;i++){
        if(map[s[i]]<k){
            let left=longestSubstring(s.slice(0,i),k);
            let right=longestSubstring(s.slice(i+1),k);
            return Math.max(left,right);
        }
    }
    return s.length;
};
// Input: s = "ababbc", k = 2
// Output: 5
