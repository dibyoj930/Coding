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
function view(root,res,level){
    if(root==null)return;
    if(res.length==level)res.push(root.val);
    view(root.left,res,level+1);
    view(root.right,res,level+1)

}
var rightSideView = function(root) {
    const res=[];
    view(root,res,0);
    return res;
    
};
// const tree=arrayToBinaryTree([[1,2,3,null,5,null,4]])
console.log(rightSideView(arrayToBinaryTree([1,2,3,4,null,null,null,5])))