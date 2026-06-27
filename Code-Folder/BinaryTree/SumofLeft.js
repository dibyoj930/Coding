function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function sumOfLeftLeaves( root) {
    if (!root) return 0;

    let sum = 0;

    // Check if left child is a leaf
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    // Recurse on left and right subtrees
    sum += sumOfLeftLeaves(root.left);
    sum += sumOfLeftLeaves(root.right);

    return sum;
}