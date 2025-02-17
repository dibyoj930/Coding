const CountSay = (n)=>{
    if(n==1)return "1";
    const str = CountSay(n-1);
    let generate='';
    let l=0,r=0;

    while(r<str.length){
        if(str[r]==str[l]){
            r++;
        }else{
            generate+=`${r-l}${str[l]}`;
            l=r;
        }
    }
    if(r!=l){
        generate+=`${r-l}${str[l]}`
    }
    return generate;
}
console.log(CountSay(11));