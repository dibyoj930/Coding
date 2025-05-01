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
function solve(root,f,prev){
    if(!root)return;
    solve(root.left,f,prev);
    
    if(prev!=null&&root.val<=prev.val){
        
        f.val=0;
        return
    }
    prev=root;
    solve(root.right,f,prev);
}

function Check(root){
    let f={val:1};
    let prev=new TreeNode(null);
    solve(root,f,prev);
    return f.val===1;
}
const tree=arrayToBinaryTree([5,1,4,null,null,3,6]);
console.log(Check(tree))


// Time Complexity: 
// O( n )
// O(n), where 
// n is the number of nodes in the tree.
// Space Complexity:
// Worst case: 
// O (n)
// O(n), due to the recursion stack in an unbalanced tree.
// Best case: 
// O(logn)
// O(logn), due to the recursion stack in a balanced tree.


