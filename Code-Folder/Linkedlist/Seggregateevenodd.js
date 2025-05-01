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



var oddEvenList = function(head) {
    let i=0;
    let even=null;
    let odd=null;
    let o=null;
    let e=null;
    while(head){
        if(i%2==0){
            //the above i%2==0 will differ when the value compariosn is asked it would be
            //head.val%2==0 that case
            if(even==null){
                even=head;
                e=head;
               
            }else{
                e.next=head;
                e=e.next;
               
            }
        }else{
            if(odd==null){
                odd=head;
                o=head;
            }else{
                o.next=head;
                o=o.next;
            }
        }
        head=head.next;
        i++;
    }
    if(e)e.next=odd;
    if(o)o.next=null;
    if(even)return even;
    return odd;
};