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
function DiagonalTraversal(root){
    let ans=[];
    if(!root)return ans;
    let q=[]
    q.push(root);
    while(q.length>0){
        let node=q.shift();
        while(node){
            if(node.left)q.push(node.left);
            ans.push(node.val);
            node=node.right;
        }
    }
    return ans;
}
console.log(DiagonalTraversal(arrayToBinaryTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])))