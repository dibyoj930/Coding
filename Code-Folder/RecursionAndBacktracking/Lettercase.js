var letterCasePermutation = function(s) {
    let res=[];
    function Letter(index,str){
        if(index==s.length){
            res.push(str);
            return 
        }
        if(!parseInt(s[index])&&parseInt(s[index])!==0){
            Letter(index+1,str+s[index].toUpperCase());
            Letter(index+1,str+s[index].toLowerCase());
        }
        else{
            Letter(index+1,str+s[index])
        }
    }
    Letter(0,"");
    return res;
};
console.log(letterCasePermutation("a1b2"))