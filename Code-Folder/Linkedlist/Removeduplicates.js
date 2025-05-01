var deleteDuplicates = function(head) {
    let curr=head;
    if(!head)return head;
    while(curr.next!=null){
        if(curr.val==curr.next.val){
            curr.next=curr.next.next;
        }else{
            curr=curr.next;
        }
    }
    return head;
};
// Input: head = [1,1,2]
// Output: [1,2]