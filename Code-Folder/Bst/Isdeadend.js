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
function solve(root,min,max){
    if(!root)return false;
    if(min==max)return true;
    return solve(root.left,min,root.val-1)||solve(root.right,root.val+1,max)
}
function Isdead(root){
    return solve(root,1,Infinity)==true
}
const tree=arrayToBinaryTree([2,7,8,9,10,13]);
console.log(Isdead(tree))