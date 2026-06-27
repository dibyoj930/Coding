class Solution {
    // Function to find the length of a loop in the linked list.
   
    
    countNodesinLoop(head) {
        // your code here
        let f=head;
        let s=head;
        if(!head||!head.next)return 0;
        while(f!=null&&f.next!=null){
            f=f.next.next;
            s=s.next;
            if(f==s){
                break;
            }
        }
        if(f==null||f.next==null)return 0;
        let len=0;
        while(f.next!=s){
            len++;
            f=f.next;
        }
        return len+1;
    }
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

const head = new ListNode(10);
head.next = new ListNode(15);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(20);

head.next.next.next.next = head;
const sol= new Solution()
console.log(sol.countNodesinLoop(head))

