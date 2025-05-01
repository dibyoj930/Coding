var characterReplacement = function(s, k) {
    let map={};
     let end,start=0;
     let maxlen=-Infinity;
     let maxf=-Infinity;
     for(end=0;end<s.length;end++){
        map[s[end]]=map[s[end]]+1||1;
        maxf=Math.max(maxf,map[s[end]])
        while(end-start+1-maxf>k){
            map[s[start]]--;
            start++
        }
        maxlen=Math.max(maxlen,end-start+1)
     }
     return maxlen;
};

// Input: s = "ABAB", k = 2
// Output: 4