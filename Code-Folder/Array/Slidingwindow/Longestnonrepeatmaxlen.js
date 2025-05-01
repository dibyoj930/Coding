var lengthOfLongestSubstring = function(s) {
    let set=new Set()
    let end,start=0;
    let maxlen=-Infinity;
    let curr=0;
    for(end=0;end<s.length;end++){
        while(set.has(s[end])){
            set.delete(s[start]);
            start++;
        }
       set.add(s[end])
       
        maxlen=Math.max(maxlen,end-start+1);
    }
    return maxlen==-Infinity?0:maxlen;
};
// s = "abcabcbb"
// Output: 3