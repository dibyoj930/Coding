var deleteMiddle = function(head) {
    if(!head||!head.next)return null;
    let prev=null;
    let s=head;
    let f=head;
    prev=s;
    while(f!=null&&f.next!=null){
        prev=s;
        s=s.next;
        f=f.next.next;
    }
    prev.next=s.next;
    s.next=null;
    return head;
};
// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]