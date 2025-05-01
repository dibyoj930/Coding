
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
    merge(a,b){
        if(a==null)return b;
        if(b==null)return a;
        let res;
        if(a.data<b.data){
            res=a;
            res.bottom=this.merge(a.bottom,b);
        }else{
            res=b;
            res.bottom=this.merge(a,b.bottom)
        }
        res.next=null;
        return res;
    }
    flatten(root) {
        // your code here
        if(!root||!root.next)return root;
        return this.merge(root,this.flatten(root.next));
    }
}