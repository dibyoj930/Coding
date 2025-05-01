// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
    }

    function arrayToList(arr) {
        if (arr.length === 0) return null;
        let dummy = new ListNode(0);
        let current = dummy;
        for (let val of arr) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next;
    }
    
    // Convert linked list to array (for output)
    function listToArray(head) {
        let result = [];
        while (head) {
            result.push(head.val);
            head = head.next;
        }
        return result;
    }
function reverseKGroup(head, k) {
    let count = 0;
   let temp = head;
   while (temp && count < k) {
       temp = temp.next;
       count++;
   }

   // If there are fewer than k nodes, return head as is
   if (count < k) return head;
   let curr=head;
   let next;
   let p=null;
   let c=0;
   while(curr!=null&&c<k){
        next=curr.next;
       curr.next=p;
       p=curr;
       curr=next;
       c++;
   }
   if(next!=null){
       head.next=reverseKGroup(next,k)
   }
   return p;

};