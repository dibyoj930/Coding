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
function Solve(root){
    if(root.left)return Solve(root.left);
    else
    return root.val;
}
function Solvemax(root){
    if(root.right) return Solvemax(root.right);
    else
    return root.val;   
}
console.log(Solve(arrayToBinaryTree( [5, 4, 6, 3, null, null, 7, 1])))
console.log(Solvemax(arrayToBinaryTree( [5, 4, 6, 3, null, null, 7, 1])))
// time complexity: O(h) or O(n) O(n) in the worst case.
// space complexity: O(h) or O(n) O(n) in the worst case