// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

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
var recoverTree = function(root) {
    let prev=null,first=null,second=null;
    function Inorder(node){
      if(node==null)return;
      Inorder(node.left);
      if(prev&&prev.val>node.val){
        if(!first){
            first=prev;
        }
        second=node;
      }
      prev=node;

      Inorder(node.right)
    }
    Inorder(root);
    if(first&&second){
        let temp=first.val;
        first.val=second.val;
        second.val=temp;
    }
    return root;
    
};
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
console.log(binaryTreeToArray( recoverTree(arrayToBinaryTree([3,1,4,null,null,2]))))
