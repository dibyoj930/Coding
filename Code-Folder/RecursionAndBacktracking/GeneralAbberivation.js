function General(str){
   function Solution(str,pos,ans,count){
    if(pos==str.length){
        if(count==0){
            console.log(ans);
        }else{
            console.log(ans+count)
        }
        return
    }
    if(count==0)Solution(str,pos+1,ans+str.charAt(pos),0);
    else 
    Solution(str,pos+1,ans+count+str.charAt(pos),0)
    
    Solution(str,pos+1,ans,count+1)
   }
   Solution(str,0,"",0)
}
General("xyz")
General("ab")