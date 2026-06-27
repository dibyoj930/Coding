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

var deleteMiddle = function(head) {
    if(!head||!head.next)return null;
    let prev=null;
    let s=head;
    let f=head;
    prev=s;
    while(f!=null&&f.next!=null){
        prev=s;
        s=s.next;
        f=f.next.next;
    }
    prev.next=s.next;
    s.next=null;
    return head;
};
// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]

console.log(listToArray(deleteMiddle(arrayToList([1,3,4,7,1,2,6]))))

