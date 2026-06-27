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

function Indsert(root,val){
   if(root==null){
    let node=new TreeNode(val);
    return node;
   }
    if(val>root.val){
        root.right=Indsert(root.right,val);
    }
    else if(val<root.val){
        root.left=Indsert(root.left,val)
    }
    return root;
}
function binaryTreeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // To remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}
const tree=arrayToBinaryTree([4,2,7,1,3]);
console.log(binaryTreeToArray(Indsert(tree,5)))

// Time Complexity

// Best/Average Case (Balanced Tree): O(log n)
// At each level, the function halves the remaining tree.
// So you traverse about log n levels before inserting.
// Worst Case (Skewed Tree): O(n)
// If the BST is skewed (like a linked list), you may need to traverse all n nodes.
// 📦 Space Complexity

// Due to:
// Recursion stack (not counting the tree structure itself)
// Best/Average Case (Balanced): O(log n)
// Depth of recursion = tree height = log n
// Worst Case (Skewed): O(n)
// All recursive calls are nested (like in a list)