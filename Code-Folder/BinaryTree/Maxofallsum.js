class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
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

function solve(root, ans) {
    if (!root) return 0;

    let l = Math.max(0, solve(root.left, ans));   // ignore negative paths
    let r = Math.max(0, solve(root.right, ans));

    let nodeMax = root.val + l + r;  // max path **through** the current node
    ans.max = Math.max(ans.max, nodeMax);  // update global max

    return root.val + Math.max(l, r);  // max path **starting** from current node
}

function Greatsum(root) {
    let ans = { max: -Infinity };  // pass by reference
    solve(root, ans);
    return ans.max;
}

console.log(Greatsum(arrayToBinaryTree([-10,9,20,null,null,15,7])))