

const Findsub=(str)=>{
  let end,start=0;
  let maxlen=-Infinity;
  let set=new Set();
  for(end=0;end<str.length;end++){
        while(set.has(str[end])){
             set.delete(str[start]);
             start++;  
        }
        set.add(str[end]);
        maxlen=Math.max(maxlen,end-start+1);
  }
  return maxlen==-Infinity?0:maxlen;
}
console.log(Findsub("abcabcbb"));
