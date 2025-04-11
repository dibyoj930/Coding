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
function solve(root){
    if(!root)return [0,0];
    let a=solve(root.left);
    let b=solve(root.right);
    if(a[0]>b[0]){return [a[0]+1,a[1]+root.val];}
    else if(a[0]<b[0]){return [b[0]+1,b[1]+root.val];}
    else
    {return [a[0]+1,Math.max(a[1],b[1])+root.val]}

}
function Longest(root){
    let ans=solve(root);
    console.log(ans)
    return ans[1];
}
const tree=arrayToBinaryTree( [4, 2, 5, 7, 1, 1, 2, 3, null , 6])
console.log(Longest(tree))