// listFormat([]); // ''

// listFormat(['Bob']); // 'Bob'
// listFormat(['Bob', 'Alice']); // 'Bob and Alice'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// // 'Bob, Ben, Tim, Jane and John'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 4,
// }); // 'Bob, Ben, Tim, Jane and 1 other'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   sorted: true,
// }); // 'Ben, Bob, Jane and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
//   length: 3,
//   unique: true,
// }); // 'Bob, Ben, Tim and 2 others'

// listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
const getSorted=(arr,option)=>{
    let issort=false,isuni=false,islen=false,len=0;
    let str='';
    let ans=arr;
    for(let key in option){
        console.log(key)
        if(key=='length'){
            islen=true;
            len=option[key]
        }
        if(key=='unique'){
            isuni=true;
            // len=option[key]
        }
        if(key=='sorted'){
            issort=true;

        }
    }
        if(isuni){
            ans=Array.from(new Set([...arr]))
            console.log(ans)
        }
        if(issort){
            ans.sort();
        }
        if(islen){
            for(let i=0;i<len;i++){
                 str+=ans[i];
                 str+=','
                 str+=" "
            }
       
            let diff=ans.length-len;
            str+=diff?` and ${diff} others`:''
        }
        if(!islen){
            for(let i=0;i<ans.length-1;i++){
                str+=ans[i];
                     str+=','
                     str+=" "
             }
             str+=ans[ans.length-1]
        }
        
         str=ans.length==1?str.slice(0,-1):str;
       return ans.length==0?'':str

    
}
console.log(getSorted(['Bob', 'Ben', 'Tim', 'Jane', 'John','Bob'],{unique:true,length:3}))