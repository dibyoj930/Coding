//max height difference should not be more than 1
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
let f=1;
function Check(root){
  if(!root)return 0;
  let l=Check(root.left);
  let r=Check(root.right);
  if(Math.abs(l-r)>1)f=0;
  return Math.max(l,r)+1;
}
function Balance(root){
   Check(root);
   return f==1;
}
console.log(Balance(arrayToBinaryTree([1,2,2,3,3,null,null,4,4])))


