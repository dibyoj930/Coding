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
function Traverse(root,s){
   if(root){
    Traverse(root.right,s);
    s+=root.val;
    root.val=s;
    Traverse(root.left,s)
   }
}
function Traverse(root){
    if(root){
     Traverse(root.right);
     sum+=root.val;
     root.val=sum;
     Traverse(root.left)
    }
 }
 let sum=0;
function BstToGst(root){
    
    
     Traverse(root)
   return root;
}
console.log(binaryTreeToArray(BstToGst(arrayToBinaryTree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]))))