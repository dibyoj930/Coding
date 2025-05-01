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
function Mindepth(root){
    let level=1;
    let que=[[root,level]]
    while(que.length){
        let [a,level]=que.shift();
        if(a.left)que.push([a.left,level+1]);
        if(a.right)que.push([a.right,level+1]);
        if(!a.left&&!a.right)return level;
    }
}
console.log(Mindepth(arrayToBinaryTree([2,null,3,null,4,null,5,null,6])))