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
function Inorder(root,res){
   if(!root)return;
   Inorder(root.left,res);
   res.push(root.val)
   Inorder(root.right,res);
}
function Convert(root,res,index){
   if(!root)return;
   Convert(root.left,res,index);
   root.val=res[index[0]];
   index[0]++;
   Convert(root.right,res,index);

}
function IntoBst(root){
   let res=[];
   let index=[0]
   Inorder(root,res);
   const newres=res.sort((a,b)=>a-b)
   Convert(root,newres,index);
   return root
}
console.log(IntoBst(arrayToBinaryTree([5,6,3,4,2,1])))