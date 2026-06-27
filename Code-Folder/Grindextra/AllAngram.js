var findAnagrams = function(s, p) {
    const res=[];
    if(s.length<p.length)return res;
    const pfreq=new Array(26).fill(0);
    const sfreq=new Array(26).fill(0);
    
    for(const ch of p){
        pfreq[ch.charCodeAt(0)-97]++;
    }
    let i=0;
    for(let j=0;j<s.length;j++){
        sfreq[s.charCodeAt(j)-97]++;
        if(j-i+1<p.length)continue;
        if(pfreq.join()===sfreq.join())res.push(i);
        sfreq[s.charCodeAt(i)-97]--;
        i++;
    }
    return res;
    
};