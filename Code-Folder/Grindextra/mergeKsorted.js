function merge(a,b){
    if(a==null)return b;
    if(b==null)return a;
    
    if(a.val<b.val){
       
        a.next=merge(a.next,b);
        return a;
    }
    else{
        
        b.next=merge(a,b.next);
        return b;
    }
    
    
}
var mergeKLists = function(lists) {
     let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = merge(ans, lists[i]);
    }
    return ans;

};