const longest=(str)=>{
    return str.split(" ").reduce((long,word)=>long.length>word.length?long:word)
}

console.log(longest("The quick brown fox jumpss over the lazy dog"));