const s1 = "({[]})";
function Balance(str){
    let map={'}':'{',')':'(',']':'['};
    let stack=[];
    for(let i=0;i<str.length;i++){
        if(!map[str[i]]){
          stack.push(str[i])
        }else if(stack.pop()!==map[str[i]]){
            return false;
        }
    }
    return stack.length==0
}
console.log(Balance(s1))