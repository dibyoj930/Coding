function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function sumOfLeftLeaves( root) {
    if(root)
{
if(root.left && !root.left.left && !root.left.right)
    return root.left.val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}
return 0;
}