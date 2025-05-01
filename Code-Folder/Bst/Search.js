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
function search(root,val){
    if(!root||root.val==val){
        return root;
    }
    if(root.val>val){
        return search(root.left,val);
    }
    else if(root.val<val){
        return search(root.right,val)
    }
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
console.log(binaryTreeToArray(search(tree,2)))