
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
    splitList(head) {
        // code here
        let head1=head;
        let f=head.next;
        let s=head;
        while(f!=head&&f.next!=head){
            s=s.next;
            f=f.next.next;
        }
        let temp=s.next;
        s.next=head1;
        let head2=temp;
        while(temp.next!=head){
            temp=temp.next;
        }
        temp.next=head2;
        return [head1,head2];
    }
}
// Input: LinkedList : 10->4->9->10
// Output: 10->4 , 9->10
