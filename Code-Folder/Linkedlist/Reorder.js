var reorderList = function(head) {
    let f=head;
    let s=head;
    while(f!=null&&f.next!=null){
        f=f.next.next;
        s=s.next;
    }
    let prev=null;
    let curr=s;
    while(curr!=null){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    let temp1=null
    let n1=head;
    let n2=prev;
    while(n2.next!=null){
    
    temp1=n1.next;
    n1.next=n2;
    n1=temp1;
    temp1=n2.next;
    n2.next=n1;
    n2=temp1
    }
    //1-->2-->. prev->5-->4-->3->-->null
};

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]