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
function LCA(root,n1,n2){
    if(!root)return;
    if(n1<root.val&&n2<root.val)return LCA(root.left,n1,n2);
    if (n1>root.val&&n2>root.val)return LCA(root.right,n1,n2);
    else return root.val
}
const tree=arrayToBinaryTree([20, 10, 30, 5, 15, 25, 35, null, null, null, null, null, null, 40]);
let lcaNode = LCA(tree, 5, 15);

// Output the value of the LCA node
console.log(lcaNode ? lcaNode : null);
// console.log(LCA(tree,12,13))

//t.c -> o(h) if balanced o(n) if not balanced
//space -> o(h) if balanced or o(n) if not balanced 

// Time Complexity

// 🔹 Best / Average Case (Balanced BST): O(log n)
// Only one path is followed down the tree.
// Tree height is log n, where n is the number of nodes.
// 🔹 Worst Case (Skewed BST): O(n)
// If tree is skewed (e.g., a linked list), may traverse all n nodes.
// 📦 Space Complexity

// 🔹 Recursion stack (depth = height of the tree):
// Balanced Tree: O(log n)
// Skewed Tree: O(n)