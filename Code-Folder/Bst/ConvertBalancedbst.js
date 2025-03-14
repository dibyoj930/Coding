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

function inOrderTraversal(root, result) {
    if (!root) return;
    
    // Traverse the left subtree
    inOrderTraversal(root.left, result);
    
    // Visit the current node
    result.push(root.val);
    
    // Traverse the right subtree
    inOrderTraversal(root.right, result);
}
function Resolve(start,end,inorder){
    if(start>end)return null;
    let mid=Math.floor((start+end)/2);
    // console.log(inorder,mid)
    let root=new TreeNode(inorder[mid]);
    root.left=Resolve(start,mid-1,inorder);
    root.right=Resolve(mid+1,end,inorder)
    
    return root;
}
function levelOrderTraversal(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();
        result.push(current.val);  // Push the current node's value

        if (current.left) queue.push(current.left);  // Add left child if exists
        if (current.right) queue.push(current.right);  // Add right child if exists
    }

    return result;
}
//treetoarray
function treeToArray(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();

        if (current) {
            result.push(current.val);  // Add the node value
            queue.push(current.left);  // Add left child
            queue.push(current.right); // Add right child
        } else {
            result.push(null);  // If node is null, add null
        }
    }

    // Trim trailing nulls to match the array representation of a complete binary tree
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

const tree=arrayToBinaryTree([1,null,2,null,3,null,4,null,null])
let inorder=[]
inOrderTraversal(tree,inorder);
console.log(treeToArray(Resolve(0,inorder.length-1,inorder)))
