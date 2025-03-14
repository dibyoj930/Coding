class Solution {
    // Helper function to check if a value exists in the tree
    fetch(root2, k) {
        if (!root2) return false;
        if (k == root2.data) return true;
        let x, y;
        if (k < root2.data) x = this.fetch(root2.left, k);
        else y = this.fetch(root2.right, k);
        return x || y;
    }

    // Traverse root1 and for each node in root1, check if there's a pair in root2
    solve(root1, root2, x, c) {
        if (!root1) return;

        // Recursively traverse the left subtree of root1
        this.solve(root1.left, root2, x, c);

        // Check if there's a node in root2 such that root1.data + root2.data = x
        if (this.fetch(root2, x - root1.data)) c[0]++;

        // Recursively traverse the right subtree of root1
        this.solve(root1.right, root2, x, c);
    }

    // Main function to count the pairs that sum up to x
    countPairs(root1, root2, x) {
        let c = [0]; // Initialize counter as an array (to pass by reference)
        this.solve(root1, root2, x, c);
        return c[0]; // Return the counter value
    }
}
// Example usage of the Solution class

// Define some tree nodes
function TreeNode(val) {
    this.data = val;
    this.left = this.right = null;
}

// Creating tree 1 (root1)
let root1 = new TreeNode(5);
root1.left = new TreeNode(3);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(2);
root1.left.right = new TreeNode(4);
root1.right.left = new TreeNode(7);
root1.right.right = new TreeNode(9);

// Creating tree 2 (root2)
let root2 = new TreeNode(10);
root2.left = new TreeNode(6);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(12);
root2.right.right = new TreeNode(18);

// Create an instance of Solution
let solution = new Solution();

// Define the sum we're looking for
let x = 15;

// Get the number of pairs whose sum is equal to x
let result = solution.countPairs(root1, root2, x);
console.log(result); // Output: number of pairs whose sum equals x

