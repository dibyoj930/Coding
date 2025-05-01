

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



    // Function to remove duplicates from unsorted linked list.
  function  removeDuplicates(head) {
    // your code here
    let map=new Map();
    map.set(head.data,1);
    let curr=head;
    let prev=curr;
    curr=curr.next;
    while(curr!=null){
        if(map.get(curr.data)){
            prev.next=curr.next;
            curr=prev.next;
           
        }else{
            map.set(curr.data,1);
            prev=curr;
            curr=curr.next
        }
       
    }
    return head;
}
console.log((removeDuplicates(arrayToList([1,5,3,5,6,7,9,2,6]))))