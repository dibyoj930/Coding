function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Convert an array to a binary tree
function arrayToBinaryTree(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

function Median(root) {
    let count = 0;
    let prev = null;
    let curr = null;
    let f = 0;
    let x = 0;
    
    // Function to traverse the tree in-order and calculate the median
    function inOrder(root) {
        if (!root) return;

        // Traverse the left subtree
        inOrder(root.left);

        // Process the current node
        count++;
        if (count === x) {
            curr = root;
        }

        if (prev === null) {
            prev = root;
        } else if (count === x - 1) {
            prev = root;
        }

        // If we have found both the previous and current node for the median, stop.
        if (f == 1) return;

        // Traverse the right subtree
        inOrder(root.right);
    }

    // Get the count of nodes
    let totalNodes = 0;
    function getCount(root) {
        if (!root) return;
        totalNodes++;
        getCount(root.left);
        getCount(root.right);
    }

    getCount(root); // Calculate total number of nodes
    x = Math.floor(totalNodes / 2) + 1; // The median is in the middle node for odd nodes, or the average of two for even

    inOrder(root);

    // If the number of nodes is odd, return the middle element
    if (totalNodes % 2 === 1) {
        return curr.val;
    } else {
        return (curr.val + prev.val) / 2;
    }
}

// Example usage:
const tree = arrayToBinaryTree([18, 16, 20, 7]);
console.log(Median(tree)); // Should return the median value
