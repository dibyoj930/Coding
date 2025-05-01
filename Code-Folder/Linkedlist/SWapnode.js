var swapNodes = function(head, k) {
    if(!head||!head.next)return head;
    let curr1=head;
    let curr2=head;
    let prev1=null;
    let prev2=null;
    let len=0;
    while(curr1!=null){
        len++;
        curr1=curr1.next;
    }
    curr1=head;
    for(let i=1;i<k;i++){
        prev1=curr1;
        curr1=curr1.next;
    }
    for(let i=1;i<len-k+1;i++){
        prev2=curr2;
        curr2=curr2.next;
    }
    if(curr1==curr2)return head;
    if (prev1) prev1.next = curr2;

    if (prev2) prev2.next = curr1;

    let temp=curr1.next;
    curr1.next=curr2.next;
    curr2.next=temp;
    if(k==1)return head=curr2;
    if(k==len)return head=curr1;
    return head;
};
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]