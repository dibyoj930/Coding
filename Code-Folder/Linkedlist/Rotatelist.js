var rotateRight = function(head, k) {
    if(!head||!head.next)return head;
    let len=1;
    let curr=head;
    while(curr.next!=null){
        len++;
        curr=curr.next;
    }
    if(k%len==0)return head;
    k=k%len;
    curr.next=head;
    let diff=len-k;
    let temp=head;
    while(diff>1){
        temp=temp.next;
        diff--;
    }
    head=temp.next;
    temp.next=null;
    return head;

};
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]