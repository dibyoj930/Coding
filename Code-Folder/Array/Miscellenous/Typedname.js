var isLongPressedName = function(name, typed) {    
    let j = 0;

    for(let i = 0; i < typed.length; i++){
        if(name[j] == typed[i]){
            j++
        }else if(typed[i] != name[j-1]){
            return false
        }
    }

    return j == name.length;
};