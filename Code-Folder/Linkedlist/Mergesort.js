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

class Solution{
merge(head1, head2) {
    let merged = new Node(-1);
    let temp = merged;

    // While head1 is not null and head2
    // is not null
    while (head1 != null && head2 != null) {
        if (head1.data < head2.data) {
            temp.next = head1;
            head1 = head1.next;
        } else {
            temp.next = head2;
            head2 = head2.next;
        }
        temp = temp.next;
    }

    // While head1 is not null
    while (head1 != null) {
        temp.next = head1;
        head1 = head1.next;
        temp = temp.next;
    }

    // While head2 is not null
    while (head2 != null) {
        temp.next = head2;
        head2 = head2.next;
        temp = temp.next;
    }
    return merged.next;
}

// Find mid using The Tortoise and The Hare approach
 findMid(head) {
    let slow = head, fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
     mergeSort(head) {
        if (head.next == null)
        return head;

    let mid = this.findMid(head);
    let head2 = mid.next;
    mid.next = null;
    let newHead1 = this.mergeSort(head);
    let newHead2 = this.mergeSort(head2);
    let finalHead = this.merge(newHead1, newHead2);

    return finalHead;
    }
}


// class Solution {
//     isCircular(head) {
//         // code here
//         let curr=head;
//         while(curr){
//             if(curr.next==head)return true;
//             curr=curr.next;
//         }
//         return false;
//     }
// }
//check if circular