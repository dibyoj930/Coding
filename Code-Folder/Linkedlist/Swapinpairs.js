var swapPairs = function(head) {
    if(!head||!head.next)return head;
    let f=head;
    let s=head.next;
    let prev=null;
    
    while(f!=null&&s!=null){
        let third=s.next;
        s.next=f;
        f.next=third;
        if(prev==null){
            head=s;
        }else{
            prev.next=s;
        }
        prev=f;
        f=third;
        if(third!=null){
            s=third.next;
        }else{
          s=null;
        }
        
    }
    return head;
};
// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

