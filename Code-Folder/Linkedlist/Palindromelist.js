
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


var isPalindrome = function(head) {
    let f=head;
    let s=head;
    while(f!=null&&f.next!==null){
        f=f.next.next;
        s=s.next;
    }
    
    let prev=null;
    let curr=s;
    let next;
    while(curr){
       next=curr.next;
       curr.next=prev;
       prev=curr;
       curr=next;
    }
     f=head;
    while(prev!=null){
        if(f.val!=prev.val){
            return false;
        }
        f=f.next;
        prev=prev.next;
    } 
    return true;

};

console.log(isPalindrome(arrayToList([1,4,6,8,6,4,1])))