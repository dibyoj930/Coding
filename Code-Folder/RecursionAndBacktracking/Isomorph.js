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

function Isomorphic(root1,root2){
    if(!root1&&!root2)return true;
    if(!root1||!root2)return false;
    if(root1.val!=root2.val)return false;
    let a=Isomorphic(root1.left,root2.left)&&Isomorphic(root1.right,root2.right)
    let b=Isomorphic(root1.right,root2.left)&&Isomorphic(root1.left,root2.right)
    return a||b;
}
const tree1=arrayToBinaryTree( [1, 2, 3, 4, 5, 7, 6, null, 7, 8]);
const tree2=arrayToBinaryTree(  [1, 3, 2, null, 6, 4, 5, 8, 7]);
console.log(Isomorphic(tree1,tree2))