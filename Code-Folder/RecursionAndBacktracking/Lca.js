// Define the TreeNode constructor
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

// Find the Lowest Common Ancestor (LCA) of two nodes
function Lca(root, n1, n2) {
    if (!root) return null;
    if (root.val == n1 || root.val == n2) return root;

    let l = Lca(root.left, n1, n2);
    let r = Lca(root.right, n1, n2);

    if (l && r) return root; // If both left and right have results, root is the LCA.
    return l ? l : r; // If only one side has the result, return that side.
}

// Create the binary tree from an array
const tree = arrayToBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
let node=Lca(tree, 5, 4)
// Find and log the LCA of nodes 5 and 1
console.log(node?node.val:null); // This will give the correct result
