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

// In-order traversal function to store values in an array
function Inorder(root, res) {
    if (!root) return;
    Inorder(root.left, res);
    res.push(root.val);
    Inorder(root.right, res);
}

// Initialize the result array and call Inorder on each tree
const res1 = [];
Inorder(arrayToBinaryTree([3,1,5]), res1);

const res2 = [];
Inorder(arrayToBinaryTree([4,2,6]), res2);

// Combine the results and sort them
const res3 = [...res1, ...res2];
const res4 = res3.sort((a, b) => a - b);

// Create a balanced BST from the sorted array
function CreateBst(start, end, inorder) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(inorder[mid]);

    root.left = CreateBst(start, mid - 1, inorder);  // Recursive call for left subtree
    root.right = CreateBst(mid + 1, end, inorder);  // Recursive call for right subtree

    return root;
}

// Convert a tree to an array (level-order traversal)
function treeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();

        if (current) {
            result.push(current.val);  // Add the node value
            queue.push(current.left);  // Add left child
            queue.push(current.right); // Add right child
        } else {
            result.push(null);  // If node is null, add null
        }
    }

    // Trim trailing nulls to match the array representation of a complete binary tree
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

// Create the balanced BST and convert it back to an array
const tree = CreateBst(0, res4.length - 1, res4);
console.log(treeToArray(tree));  // This will print the tree as an array
