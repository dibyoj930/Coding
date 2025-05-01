class Solution {
    rotateDLL(head, p) {
     if (!head || p === 0) return head;

        // Step 1: Go to the last node
        let c = head;
        while (c.next !== null) {
            c = c.next;
        }

        // Step 2: Make it circular
        c.next = head;
        head.prev = c;

        // Step 3: Move `c` to the (p-1)th node
        c = head;
        for (let i = 0; i < p - 1; i++) {
            c = c.next;
        }

        // Step 4: New head is next of `c`
        let newHead = c.next;

        // Step 5: Break the circular link
        c.next = null;
        newHead.prev = null;

        return newHead;
    }
}

// Input: Doubly Linkedlist: 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 ,p = 2
// Output: 3 <-> 4 <-> 5 <-> 6 <-> 1 <-> 2