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
let ans=-1;
let ans2=-1
function Smallest(root,idx,k){
   if(!root)return;
   
   Smallest(root.left,idx,k);
   if(k==idx[0]){
    ans=root.val;
    idx[0]++;
    return;
   }
idx[0]++;
   Smallest(root.right,idx,k);
}
function Largest(root,idx,k){
    if(!root)return;
    Largest(root.right,idx,k);
    
    if(k==idx[0]){
     ans2=root.val;
     idx[0]++;
     return;
    }
 idx[0]++;
 Largest(root.left,idx,k);
    
 }
function Solve(root,k){
    let idx=[1];
   
    Smallest(root,idx,k);
    return ans;
}
function Solve2(root,k){
    let idx=[1];
   
    Largest(root,idx,k);
    return ans2;
}
const tree=arrayToBinaryTree([5,3,6,2,4,null,null,1])
console.log(Solve(tree,3))
console.log(Solve2(tree,3))