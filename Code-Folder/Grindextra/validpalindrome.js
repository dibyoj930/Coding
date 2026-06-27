function isalphanum(x){
    let code=x.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||  // 0-9
        (code >= 65 && code <= 90) ||  // A-Z
        (code >= 97 && code <= 122)    // a-z
    );
}
var isPalindrome = function(s) {
    let l=0;
    let r=s.length-1;
    while(l<r){
        while(l<r&&!isalphanum(s[l])){
            l++;
        }
        while(l<r&&!isalphanum(s[r])){
            r--;
        }
        if(s[l].toLowerCase()!==s[r].toLowerCase()){
            return false;
        }
        l++;
        r--;
    }
    return true;
};