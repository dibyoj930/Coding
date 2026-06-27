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
var removeNthFromEnd = function(head, n) {
    if(!head)return head;
   
    let l=0;
    let curr=head;
    while(curr){
        l++;
        curr=curr.next;
    }
    if(l==n){
        let temp=head.next;
        delete head;
        return temp;
    }
    let prev=null;
    curr=head;
    prev=curr;
    for(let i=0;i<l-n;i++){
        prev=curr;
        curr=curr.next;
    }
    prev.next=curr.next;
    curr.next=null;
    return head;
};
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

console.log(listToArray(removeNthFromEnd(arrayToList([1,2,3,4,5,6,7]),2)))
