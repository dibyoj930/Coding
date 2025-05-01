class Solution {
    Reverse(head){
         let prev=null;
        let curr=head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        
        return prev;
    }

    compute(head) {
        // your code here
       
        head=this.Reverse(head);
        let curr=head;
        let maxval=head.data;
        let prev=head;
        
        while (curr && curr.next) {
            if (curr.next.data < maxval) {
                // Remove node
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
                maxval = curr.data;
            }
        }

        // Step 3: Reverse again to restore original order
        return this.Reverse(head);
    }
}

// Input:
// LinkedList = 12->15->10->11->5->6->2->3
// Output: 15->11->6->3