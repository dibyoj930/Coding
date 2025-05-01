class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = this.next = null; // Adding 'next' for successor pointer
    }
}

class Solution {
    /**
    * @param Node root
    * @returns none
    */
    Successor(prev, root) {
        if (!root) return prev; // Return the current 'prev' if root is null

        // Traverse the left subtree
        prev = this.Successor(prev, root.left);

        // Link the previous node's 'next' to the current node
        if (prev != null) {
            prev.next = root;
        } 

        // Update the prev pointer to the current node
        prev = root;

        // Traverse the right subtree
        return this.Successor(prev, root.right);
    }

    populateNext(root) {
        // Initialize prev as null (starting point)
        let prev = null;
        this.Successor(prev, root); // Start the in-order traversal to populate 'next'
    }
}

// Example usage:
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let solution = new Solution();
solution.populateNext(root);

// Check the 'next' pointers
console.log(root.left.left.next); // Should print the node with value 2
console.log(root.left.next); // Should print the node with value 5
console.log(root.left.right.next); // Should print the node with value 1
//prev=this.successor(root.left,prev)