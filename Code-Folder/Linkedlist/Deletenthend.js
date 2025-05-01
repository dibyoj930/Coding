var removeNthFromEnd = function(head, n) {
    if(!head)return head;
   
    let l=0;
    let curr=head;
    while(curr){
        l++;
        curr=curr.next;
    }
    if(l==n){
        let temp=head.next;
        delete head;
        return temp;
    }
    let prev=null;
    curr=head;
    prev=curr;
    for(let i=0;i<l-n;i++){
        prev=curr;
        curr=curr.next;
    }
    prev.next=curr.next;
    curr.next=null;
    return head;
};
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]