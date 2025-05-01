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
function Solve(root,ans){
   if(!root)return;
   Solve(root.left,ans);
   ans.push(root.val)
   Solve(root.right,ans);
}


function Inorder(root){
    let ans=[];
    Solve(root,ans)
    return ans;
}
const tree=arrayToBinaryTree([5,3,6,2,4,null,null,1])
console.log(Inorder(tree))