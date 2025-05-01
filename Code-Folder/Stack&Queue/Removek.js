var removeKdigits = function(num, k) {
    let res=[];
    let ans='';
    for(let i=0;i<num.length;i++){
        while(res.length>0&&res[res.length-1]>num[i]&&k){
            res.pop();
            k--;
        }
        if(res.length==0&&num[i]=='0')continue;
        res.push(num[i]);
    }
    while(k>0&&res.length){
        res.pop();
        k--;
    }
    return res.length==0?'0':res.join('');
};
//1432219 k=3
//1219
//123456 k=3
//123