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
    if(n1.val<root.val&&n2.val<root.val)return LCA(root.left,n1,n2);
    else if (n1.val>root.val&&n2.val>root.val)return LCA(root.right,n1,n2);
    else return root.val
}
const tree=arrayToBinaryTree([6,2,8,0,4,7,9,null,null,3,5]);
console.log(LCA(tree,2,8))