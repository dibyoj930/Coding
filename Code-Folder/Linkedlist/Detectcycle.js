// var hasCycle = function(head) {
//     let map={};
//     if(!head)return;
//     while(head){
//         if(!map[head]){
//             map[head]=1;
//             head=head.next;
//         }
//         else{
//             return true;
//         }
//     }
//     return false;
// };

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
    var hasCycle = function(head) {
        let h=head;
        let l=head;
        while(h!=null&&h.next!=null){
          l=l.next;
          h=h.next.next;
          if(h==l)return true
         
        }
        return false;
      };