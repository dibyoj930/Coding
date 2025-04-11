function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let idx;
let map = new Map();

function solve(a1, a2, lb, ub) {
    if (ub < lb) return null;

    // Create a new node from the current root in preorder (a2[idx])
    let res = new TreeNode(a2[idx++]);

    // If the current range is a single element, it's a leaf node
    if (lb === ub) return res;

    // Find the position of the current node in the inorder array (a1)
    let mid = map.get(res.val);

    // Recursively build the left subtree and right subtree
    res.left = solve(a1, a2, lb, mid - 1);
    res.right = solve(a1, a2, mid + 1, ub);

    return res;
}

function build(a1, a2, n) {
    idx = 0;
    map.clear();

    // Create a map to quickly access the index of any value in the inorder array
    for (let i = 0; i < n; i++) {
        map.set(a1[i], i); // a1 is the inorder array
    }

    // Start building the tree from the root
    let root = solve(a1, a2, 0, n - 1);
    return root;
}

// Test with the given example:
let result = build([3, 1, 4, 0, 2, 5], [0, 1, 3, 4, 2, 5], 6);

// Output the result (in this case, you may want to implement a tree traversal to print the result)
console.log(result);
