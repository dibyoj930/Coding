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
function Correctcheck(root,min,max){
    if(root==null)return true;
    if(root.value>=max||root.value<=min)return false;
    return Correctcheck(root.left,min,root.value)&&Correctcheck(root.right,root.value,max)
}
function Check(root){
    return Correctcheck(root,-Infinity,Infinity)
}
console.log(Check(arrayToBinaryTree([2,1,3])))