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


    var detectCycle = function(head) {
        if(!head)return null;
        let l=head,h=head;
        while(l!=null&&h!=null&&h.next!=null){
            l=l.next;
            h=h.next.next;
            if(l==h)break;
        }
        if(l!=h||h==null||h.next==null)return null;
    
     l=head;
     while(l!=h){
        l=l.next;
        h=h.next;
     }
     return l;
    };

    // head = [3,2,0,-4]
    // output=1