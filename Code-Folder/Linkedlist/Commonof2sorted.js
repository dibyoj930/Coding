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

class Solution {

    findIntersection(head1, head2) {
        // your code here
        let ptr1=head1;
        let ptr2=head2;
        let head=null;
        let curr=null;
        while(ptr1&&ptr2){
           if(ptr1.data==ptr2.data){
               if(head==null){
                   let t=new Node(ptr1.data);
                   head=t;
                   curr=t;
               }else{
                   let t=new Node(ptr1.data);
                   curr.next=t;
                   curr=curr.next;
               }
               ptr1=ptr1.next;
           ptr2=ptr2.next;
           }else{
               if(ptr1.data<ptr2.data){
                   ptr1=ptr1.next;
               }else{
                   ptr2=ptr2.next;
               }
           }
           
        }
        return head;
    }
}
// Input: LinkedList1 = 1->2->3->4->6, LinkedList2 = 2->4->6->8
// Output: 2->4->6