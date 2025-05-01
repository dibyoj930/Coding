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
var reverseList = function(head) {
    let curr=head;
    let p=null;
    while(curr){
       let next=curr.next;
       curr.next=p;
       p=curr;
       curr=next;
    }
    head=p;
    return head;
};
console.log(listToArray(reverseList(arrayToList([1,2,3,4,5]))))
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
