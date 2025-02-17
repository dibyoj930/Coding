//Flip Game -->
function Flip(str){
    if(str.length<2){
        return false;
    }
    for(let i=0;i<str.length-1;i++){
        if(str[i]=='$'&&str[i+1]=='$'){
           let changed=str.slice(0,i)+"**"+str.slice(i+2)
        
        if(!Flip(changed)){
            return true;
        }
    }
    }
    return false;
}
console.log(Flip("****"))
// Time complexity: O(N ^ N)
// 	Space complexity: O(N) 

// 	Where N represents the length of STR.