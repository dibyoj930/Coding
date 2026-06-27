const Finfana=(str1,str2)=>{
    if(str1.length!==str2.length)return false;
    let map={};
    for(let i of str1){
        if(map[i]){
            map[i]++;
        }else{
            map[i]=1
        }
    }
    
    for(let i=0;i<str2.length;i++){
        if(!map[str2[i]])return false;
        str2[i]--
    }
    return true;
}
console.log(Finfana("anagram", "nagaram"))