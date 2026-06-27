var longestPalindrome = function(s) {
    let freq={};
    let odd=0;
    for(let k of s){
        freq[k]=(freq[k]||0)+1;
        if(freq[k]%2===1){
            odd++;
        }else{
            odd--;
        }
    }
    if(odd){
        return s.length-odd+1;
    }
    return s.length;
};
//time complexity -> O(n);
//space complexity -> O(k); k-> unique characters 