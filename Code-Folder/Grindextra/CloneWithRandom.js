class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
        this.random = null;
    }
}

class Solution {
    cloneLinkedList(head) {
        // code here
        let curr=head;
        let temp;
        while(curr){
           temp=curr.next;
           curr.next = new Node(curr.data);
           curr.next.next=temp;
           curr=temp;
        }
        curr=head;
        while(curr){
            curr.next.random=curr.random?curr.random.next:curr.random;
            curr=curr.next.next;
        }
        let original=head;
        let copy=head.next;
        temp=copy;
        while(original&&copy){
            original.next=original.next.next;
            copy.next=copy.next?copy.next.next:copy.next;
            original=original.next;
            copy=copy.next;
        }
        return temp;
    }
}