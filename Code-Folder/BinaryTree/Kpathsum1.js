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
function solve(root,target,val){
    if (!root) return false;
    if(!root.left&&!root.right){
        if(val+root.val==target){
            return true;
        }else{
            return false
        }
    }
    let l,r;
    l=solve(root.left,target,root.val+val);
    r=solve(root.right,target,root.val+val);
    return l||r;
}
function Kpath(root,target){
    if(!root)return false
   return  solve(root,target,0);
}
console.log(Kpath(arrayToBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]),22))