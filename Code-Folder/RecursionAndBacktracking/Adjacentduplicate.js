const Adjacent=(str)=>{
    let n=str.length;
    if(n<2)return str;
    if(str[n-1]==str[n-2]){
       
        return Adjacent( str.slice(0,-1));
    }else{
        let last=str.slice(-1);
        
        return Adjacent(str.slice(0,-1))+last
    }
   

}
console.log(Adjacent("aabbcb"))//abcb