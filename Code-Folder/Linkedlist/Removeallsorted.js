
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


var deleteDuplicates = function(head) {
    let dummy=new ListNode(0);
    dummy.next=head;
    let prev=dummy;
    let curr=head;
    while(curr){
        while(curr.next&&curr.val==curr.next.val){
            curr=curr.next;
        }
        if(prev.next==curr){
            prev=curr;
        }
        else{
            prev.next=curr.next;
        }
        curr=curr.next;
    }
    return dummy.next;
};

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]