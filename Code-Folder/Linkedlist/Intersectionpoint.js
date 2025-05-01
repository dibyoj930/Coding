
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





var getIntersectionNode = function(headA, headB) {
    if(!headA||!headB)return null;
    let p1=headA;
    let p2=headB;
    let c1=0;
    let c2=0;
    while(p1){
      c1++;
      p1=p1.next;
    }
    while(p2){
        c2++;
        p2=p2.next;
    }
    
    p1=headA;
    p2=headB
    if(c1>c2){
        for(let i=0;i<c1-c2;i++){
            p1=p1.next;

        }
    }
    if(c2>c1){
         for(let i=0;i<c2-c1;i++){
            p2=p2.next;

        }
    }
    while(p1!=p2){
        p1=p1.next;
        p2=p2.next;
    }
   return p1;
};