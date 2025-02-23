//T.C. -> O(N);
//S.C. -> O(N);
 
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

function Depth( root){
   if(root==null)return 0;
   let left = Depth(root.left);
   let right = Depth(root.right);

   return Math.max(left,right)+1
}
console.log(Depth(arrayToBinaryTree([3,9,20,null,null,15,7])))