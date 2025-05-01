
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
    reverseDLL(head) {
        // code here
        let curr=head;
        if(!head||!head.next)return head;
        while(curr.next!=null){
            curr=curr.next;
        }
        curr.next=curr.prev;
        curr.prev=null;
        head=curr;
        curr=curr.next;
        while(curr.prev!=null){
            let tmp=curr.next;
            curr.next=curr.prev;
            curr.prev=tmp;
            curr=curr.next;
        }
        curr.prev=curr.next;
        curr.next=null;
        return head;
    }
}