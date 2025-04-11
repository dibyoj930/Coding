function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
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

let max;
function solve(root){
    if(!root)return 0;
   
    let left=solve(root.left);
    let right=solve(root.right);
    max=Math.max(max,left+right+1);
    //considering edges
    return Math.max(left,right)+1;
}
function Diameter(root){
    max=-Infinity;
   solve(root);
   return max;
}
const tree=arrayToBinaryTree( [5, 8, 6, 3, 7, 9]);
console.log(Diameter(tree))